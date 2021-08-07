import { FileAbstract, FileInfo } from '../FileAbstract';
import path from '@utils/path';
import { FieldExpection } from '../../../expection';
import { DataObject } from '../../createFile';
import { emit } from '../../plugin';
import { LineInfo } from '@model/index';
import { LiteralFuncType } from '@typings/tool';

function getFileInfoType(value: string) {
    const prefix = value.split(' ')[0]
    return prefix ? prefix : 'unknown'
}

/**
 * File类
 * 用于生成.mcfunction文件
 */
export class File<D extends DataObject = {}> extends FileAbstract<D> {
    readonly #list: LineInfo[] = []
    readonly #fileSet = new Set<FileAbstract<D>>()
    readonly #tag: string = ''
    readonly #tagNamespace: string

    constructor(filename: string, namespace?: string, tag = '', description: LiteralFuncType = '') {
        super(filename, 'function', namespace, description)
        emit('init', this)
        if (tag) {
            const match = /^([a-z_]:)?([a-z_][a-z_-\d\/]*[a-z_-\d]*)$/.exec(tag)
            if (!match) {
                throw FieldExpection('invalid tag declare `' + tag + '`, cannot contain these chars `< > ? : * | \\`  and the format like `sys:foo/bar`')
            }
            const [, _tagNamespace, _tag] = match
            this.#tagNamespace = (_tagNamespace || 'minecraft:').slice(0, -1)
            this.#tag = _tag
        }
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
    public addComment(value: string): void
    public addComment(value: string[]): void
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
        (Array.isArray(value) ? value : [value]).forEach(file => {
            if (file instanceof FileAbstract) {
                this.#fileSet.add(file)
            }
            this.#list.push(
                file instanceof FileAbstract
                    ? file.toJson()
                    : typeof file === 'string'
                        ? { type: getFileInfoType(file), text: file }
                        : file as LineInfo
            )
        })
    }
 
    /** 判断是否已缓存此file对象 */
    public isFileCached(file: FileAbstract<any>) {
        return this.#fileSet.has(file)
    }
  
    /** 缓存file对象 */
    public cacheFile(file: FileAbstract<any>) {
        this.#fileSet.add(file)
    }
   
    public override get fullname() {
        const namespace = this.namespace ? this.namespace : 'minecraft'
        return path.join(namespace, 'functions', this.filename + '.mcfunction')
    }
    
    public override create(dir: string): FileInfo {
        const name = path.join(dir, 'data', this.fullname)
        this.context.add(Array.from(this.#fileSet))
        return {
            name,
            description: this.description,
            ...this.toJson(),
        }
    }
    
    public override toString() {
        return 'function ' + super.toString()
    }
    
    public override toJson(): LineInfo {
        return {
            type: 'file',
            text: this.list.length + '',
            extra: this.#list,
        }
    }
}