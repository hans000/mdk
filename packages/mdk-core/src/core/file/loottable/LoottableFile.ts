import { DataObject } from '../../createFile';
import path from '@utils/path';
import { FileAbstract, FileInfo } from '../FileAbstract';
import { emit } from '../../plugin';
import { LiteralFuncType } from '@typings/tool';

export class LoottableFile<D extends DataObject> extends FileAbstract<D> {
    readonly #list: string[] = []

    constructor(filename: string, namespace: string, description: LiteralFuncType) {
        super(filename, 'loottable', namespace, description)
        emit('init', this)
    }
    public override add(text: string) {
        this.#list.length = 0
        this.#list.push(text)
    }
    public override get fullname() {
        const namespace = this.namespace ? this.namespace : 'minecraft'
        return path.join('data', namespace, 'loottables', this.filename + '.json')
    }
    public override create(dir: string): FileInfo {
        const name = path.join(dir, 'data', this.fullname)
        const text = this.#list[0]
        return {
            name,
            type: 'loottable',
            text,
            extra: this.#list,
            description: this.description,
        }
    }
}