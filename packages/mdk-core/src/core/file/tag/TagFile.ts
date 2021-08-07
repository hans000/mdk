import { File } from '..'
import { DataObject } from '../../createFile';
import path from '@utils/path';
import { FileAbstract, FileInfo } from '../FileAbstract';
import { emit } from '../../plugin';
import { LiteralFuncType } from '@typings/tool';

export type TagFileType =
    | 'blocks' 
    | 'entity_types' 
    | 'items' 
    | 'fluids' 
    | 'functions'
export type FilenameType = `${TagFileType}/${string}`

export class TagFile<D extends DataObject> extends FileAbstract<D> {
    readonly #replace: boolean
    readonly #list = new Set<string>()

    constructor(filename: FilenameType, namespace: string, replace = false, description: LiteralFuncType) {
        super(filename, 'tags', namespace, description)
        emit('init', this)
        this.#replace = replace
    }
    public override add(file: string): void
    public override add(file: File<D>): void
    public override add(file: File<D> | string) { // TODO 验重
        const result = file instanceof File
            ? file.toString().replace(/^function /, '')
            : file
        this.#list.add(result)
    }
    public override get fullname() {
        const namespace = this.namespace ? this.namespace : 'minecraft'
        return path.join(namespace, 'tags', this.filename + '.json')
    }
    public override create(dir: string): FileInfo {
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
}