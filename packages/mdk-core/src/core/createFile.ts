import { LiteralFuncType } from '@typings/tool';
import { PredicateFile, LoottableFile, File, TagFile, FilenameType } from './file';
import { FileAbstract } from './file/FileAbstract';
import { setFile } from './hooks/useFile';

export type FileType =
    | 'function'
    | 'predicate'
    | 'loottable'
    | 'tags'
    // | 'advancement'
    // | 'dimension'
    // | 'worldgen'

export type MapFile<D extends DataObject = {}> = {
    function: File<D>
    predicate: PredicateFile<D>
    loottable: LoottableFile<D>
    tags: TagFile<D>
    // advancement: File<D>
    // dimension: File<D>
    // worldgen: File<D>
}

export type DataObject = Record<string, unknown>

export type MapFilename = {
    function: string
    predicate: string
    loottable: string
    tags: FilenameType
    // advancement: string
    // dimension: string
    // worldgen: string
}

export interface FileOptions<D extends DataObject, T extends FileType = 'function'> {
    /** 文件名 */
    filename: MapFilename[T]
    /** 命名空间，默认minecraft */
    namespace?: string
    /** 描述信息 */
    description?: LiteralFuncType
    /** 文件类型，默认function */
    type?: T
    /** tag文件，仅用于.mcfunction，例如：tick load等 */
    tag?: T extends 'function' ? string : never
    /** 渲染入口 */
    render: (context: MapFile<any>[T]) => D | void
    /** 仅用于tagfile */
    replace?: T extends 'tags' ? boolean : never
}
/**
 * 创建一个file对象
 * @param fileOptions 配置项
 */
export function createFile<D extends DataObject, T extends FileType = 'function'>(fileOptions: FileOptions<D, T>): MapFile<D>[T] {
    const { filename, namespace, type, render, tag, replace, description } = fileOptions
    let file: FileAbstract<D>
    // 实例化file对象
    if (type === 'predicate') {
        file = new PredicateFile<D>(filename, namespace, description)
    } else if (type === 'loottable') {
        file = new LoottableFile<D>(filename, namespace, description)
    } else if (type === 'tags') {
        file = new TagFile<D>(filename as never, namespace, replace, description)
    } else {
        file = new File<D>(filename, namespace, tag, description)
    }
    // 更新当前上下文对象
    setFile(file)
    // 执行渲染并设置自定义数据
    file.setData(render(file as MapFile<D>[T]))
    // 重置上下文对象
    setFile(null)
    return file as never
}
