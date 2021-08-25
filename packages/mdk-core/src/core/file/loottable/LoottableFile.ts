import path from '@utils/path';
import { FileAbstract, FileAbstractOptions, FileInfo } from '../FileAbstract';
import { emit } from '../../plugin';
import { LiteralFuncType, LiteralUnion } from '@typings/tool';
import { DataObject } from '@typings/base';
import { File } from '@core/index';

export interface LoottableOptions<D extends DataObject = {}> extends FileAbstractOptions<D> {
    /** tag文件，仅用于.mcfunction，例如：tick load等 */
    tag?: LiteralUnion<'load' | 'tick', string>
    /** 渲染入口 */
    render: (context: LoottableFile<any>) => D | void
}

export class LoottableFile<D extends DataObject> extends FileAbstract<D> {
    readonly #list: string[] = []

    constructor(options: LoottableOptions<D>) {
        super({
            filename: options.filename,
            namespace: options.namespace,
            description: options.description || '',
            render: options.render,
            type: 'loottables',
        })
        emit('init', this)
    }

    public override add(text: string) {
        this.#list.length = 0
        this.#list.push(text)
    }
    
    public override create(dir: string): FileInfo {
        super.load()
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