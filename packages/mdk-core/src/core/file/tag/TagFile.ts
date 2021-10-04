import { File } from '..'
import path from '@utils/path';
import { FileAbstract, FileAbstractOptions, FileInfo } from '../FileAbstract';
import { emit } from '../../plugin';
import { DataObject } from '@typings/base';
import { popFile, usePack } from '@core/hooks';

export type TagFileType =
    | 'blocks' 
    | 'entity_types' 
    | 'items' 
    | 'fluids' 
    | 'functions'
    
export type FilenameType = `${TagFileType}/${string}`

export interface TagOptions<D extends DataObject = {}> extends FileAbstractOptions<D> {
    /** 渲染入口 */
    render: (context: TagFile<any>) => D | void
    replace?: boolean
}
export class TagFile<D extends DataObject> extends FileAbstract<D> {
    readonly #replace: boolean
    readonly #list = new Set<string>()

    constructor(options: TagOptions<D>) {
        super({
            filename: options.filename,
            namespace: options.namespace,
            description: options.description || '',
            render: options.render,
            type: 'tags',
        })
        emit('init', this)
        this.#replace = options.replace
    }

    public override add(file: File<D> | string) { // TODO 验重
        const result = file instanceof File
            ? file.toString().replace(/^function /, '')
            : file
        this.#list.add(result)
    }

    public override load(cached = true) {
        if (super.load(cached)) {
            return false
        }
        popFile()
        return true
    }

    public getData(cached = true): D {
        this.load(cached)
        return this.data
    }
    
    public override create(dir: string): FileInfo {
        this.load()
        const name = path.join(dir, 'data', this.fullname)
        const text = JSON.stringify({
            replace: this.#replace,
            value: Array.from(this.#list),
        }, null, 4)
        return {
            name,
            type: 'tags',
            text,
            extra: this.#list,
            description: this.description,
        }
    }
     
    public toString() {
        this.load()
        const context = usePack()
        let namespace = this.namespace
            ? this.namespace
            : context.isModule
                ? context.packname
                : 'minecraft'
        return `${namespace}:${this.filename}`
    }
}