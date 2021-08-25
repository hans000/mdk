import { File } from "@core/index";
import { setFile, usePack } from "../hooks";
import { ToStringAbstract, LineInfo } from '@model/index'
import { emit } from "../plugin";
import { __MDK__DEV__ } from "@dev/index";
import { validPathName } from "@tools/valid";
import { LiteralFuncType } from "@typings/tool";
import path from "@utils/path";
import { DataObject } from "@typings/base";
import { Pack } from "@core/Pack";

export type FileType =
    | 'functions'
    | 'predicates'
    | 'loottables'
    | 'tags'
    // | 'advancement'
    // | 'dimension'
    // | 'worldgen'

export interface FileAbstractOptions<D extends DataObject = {}> {
    /** 文件名 */
    filename: string
    /** 命名空间，默认minecraft */
    namespace?: string
    /** 描述信息 */
    description?: LiteralFuncType
    /** 渲染入口 */
    render: (context: FileAbstract<any>) => D | void
    /** 文件类型，默认function */
    type?: FileType | 'recipes'
}

export interface FileInfo {
    /** 类型 */
    type: string
    /** 名称 */
    name: string
    /** 文本 */
    text: string
    /** 描述信息 */
    description: string
    /** 额外数据 */
    extra?: any
}

export type Callback<D extends DataObject> = (context: File<{}>) => D


export abstract class FileAbstract<D extends DataObject = {}> implements ToStringAbstract {
    #data: D = null
    readonly #options: FileAbstractOptions<D>
    public context: Pack = null

    constructor(options: FileAbstractOptions<D>) {
        this.#options = options
        validPathName(options.filename)
        emit('init', this)
    }
   
    /** * 获取文件名 */
    public get filename() { return this.#options.filename }
   
    /** * 获取命名空间 */
    public get namespace() {
        const context = process.env.__DEV__ ? __MDK__DEV__.pack : this.context
        const { namespace } = this.#options
        return (
            namespace
                ? namespace
                : context.isModule
                    ? context.packname
                    : 'minecraft'
        )
    }

    /** * 获取类型 */
    public get type() { return this.#options.type }

    /** * 设置命名空间 */
    // public set namespace(namespace: string) { this.#options.namespace = namespace }
  
    /** * 获取描述信息 */
    public get description() {
        const { description } = this.#options
        return typeof description === 'string'
            ? description
            : description({
                filename: this.filename,
                namespace: this.namespace,
            })
    }
  
    public load() {
        setFile(this)
        if (this.#data === null) {
            const data = this.#options.render(this) || {}
            this.#data = data as D
        }
    }

    /** * 获取全路径 */
    public get fullname() {

        const ext = this.type === 'functions' ? '.mcfunction' : '.json'
        return path.join(this.namespace, this.type, this.filename + ext)
    }
  
    /**
     * 获取接口数据
     * @param flag 是否缓存引用的文件，默认true
     */
    public getData(flag = true): D {
        if (flag) {
            const pack = usePack()
            pack.add(this)
        }
        this.load()
        return this.#data
    }
 
    /** * 添加项目 */
    public abstract add(value: unknown): void
 
    /** * 生成文件信息 */
    public abstract create(dir: string): FileInfo
 
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
  
    public toJson(): LineInfo {
        this.load()
        return {
            type: 'unknown',
            text: this.toString(),
        }
    }
}