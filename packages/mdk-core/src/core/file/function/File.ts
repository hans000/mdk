import { FileAbstract, FileAbstractOptions, FileInfo } from '../FileAbstract';
import path from '@utils/path';
import { emit } from '../../plugin';
import { LineInfo } from '@model/index';
import { LiteralUnion } from '@typings/tool';
import { Pack } from "@core/Pack";
import { DataObject } from '@typings/base';
import { FieldExpection } from '@/expection';

function getFileInfoType(value: string) {
    const prefix = value.split(' ')[0]
    return prefix ? prefix : 'unknown'
}
export interface FileOptions<D extends DataObject = {}> extends FileAbstractOptions<D> {
    /** tag文件，仅用于.mcfunction，例如：tick load等 */
    tag?: LiteralUnion<'load' | 'tick', string>
    /** 渲染入口 */
    render: (context: File<any>) => D | void
}

/**
 * File类
 * 用于生成.mcfunction文件
 */
export class File<D extends DataObject = {}> extends FileAbstract<D> {
    readonly #list: LineInfo[] = []
    #tag: string = ''
    #tagNamespace = ''

    constructor(options: FileOptions<D>) {
        super({
            filename: options.filename,
            namespace: options.namespace,
            description: options.description || '',
            render: options.render,
            type: 'functions',
        })
        this.#tag = options.tag || ''
        emit('init', this)
    }
 
    /** file对象中的内容 */
    public get list() { return this.#list }
  
    /** tag路径 */
    public get tag() { return this.#tag }
  
    /** tag的命名空间 */
    public get tagNamespace() { return this.#tagNamespace }
 
    /**
     * 添加内容
     * @param value 内容
     */
    public addComment(value: string | string[]) {
        const arr = Array.isArray(value) ? value : [value]
        this.#list.push(...arr.map(v => ({
            type: 'comment',
            text: '# ' + v,
        })))
    }
  
    /**
     * 添加内容
     * @param value 内容
     */
    public override add(value: string | LineInfo | FileAbstract<D>) {
        if (value instanceof FileAbstract) {
            value.context = this.context
            this.#list.push(value.toJson())
            Pack.cacheFile(value)
        } else {
            this.#list.push(
                typeof value === 'string'
                    ? { type: getFileInfoType(value), text: value }
                    : value as LineInfo
            )
        }
    }

    public override load() {
        super.load()
        const tag = this.#tag
        if (tag) {
            const match = /^([a-z_]:)?([a-z_][a-z_-\d\/]*[a-z_-\d]*)$/.exec(tag)
            if (! match) {
                throw FieldExpection('invalid tag declare `' + tag + '`, cannot contain these chars `< > ? : * | \\`  and the format like `sys:foo/bar`')
            }
            const [, _tagNamespace, _tag] = match
            this.#tagNamespace = (
                _tagNamespace
                    ? _tagNamespace.slice(0, -1)
                    : this.context.isModule
                        ? this.context.packname
                        : 'minecraft'
            )
            this.#tag = _tag
        }
    }
  
    public override create(dir: string): FileInfo {
        const name = path.join(dir, 'data', this.fullname)
        return {
            name,
            description: this.description,
            ...this.toJson(),
        }
    }
    
    public override toJson(): LineInfo {
        this.load()
        return {
            type: 'file',
            text: 'function ' + this.toString(),
            extra: this.list,
        }
    }
}