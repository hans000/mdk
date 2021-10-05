import { File } from "@core/index";
import { pushFile, setPack, usePack } from "@/hooks";
import { emit } from "../plugin";
import { __MDK__DEV__ } from "@dev/index";
import { validPathName } from "@tools/valid";
import path from "@utils/path";
import { Pack } from "@core/Pack";
import { ContainerExpection } from "@tools/expection";
import { ToStringAbstract, LineInfo } from "@tools/model";
import { DataObject, LiteralFuncType } from "@tools/typings";

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
        const context = this.context ? this.context : process.env.__DEV__ ? __MDK__DEV__.pack : null
        if (! context) {
            throw ContainerExpection('`', this.#options.filename, '` should be used Pack context')
        }
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

    /** * 获取自定义数据 */
    protected get data() { return this.#data }
  
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
  
    /**
     * 加载数据
     * @param cached 是否缓存引用的文件，默认true
     * @returns 返回true表示首次加载
     */
    public load(cached: boolean) {
        if (this.#data === null) {
            pushFile(this)
            let context = usePack()
            if (this.context && this.context !== context) {
                setPack(this.context)
                context = this.context
            }
            if (cached) {
                context.add(this)
            }
            const data = this.#options.render(this) || {}
            this.#data = data as D
            return true
        }
        return false
    }
  
    /**
     * 获取接口数据
     * @param cached 是否缓存引用的文件，默认true
     */
    public abstract getData(cached: boolean): D

    /** * 获取全路径 */
    public get fullname() {
        const ext = this.type === 'functions' ? '.mcfunction' : '.json'
        return path.join(this.namespace, this.type, this.filename + ext)
    }
 
    /** * 添加项目 */
    public abstract add(value: unknown): void
 
    /** * 生成文件信息 */
    public abstract create(dir: string): FileInfo
  
    public toJson(): LineInfo {
        this.load(true)
        return new LineInfo(
            'unknown',
            this.toString(),
        )
    }
}