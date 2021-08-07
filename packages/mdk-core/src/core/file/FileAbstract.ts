import { Pack } from "../Pack";
import { File, DataObject, FileType } from "@core/index";
import { ToStringAbstract, LineInfo, ContextAbstract } from '@model/index'
import { emit } from "../plugin";
import { __MDK__DEV__ } from "@dev/index";
import { useFile } from "@core/hooks";
import { validPathName } from "@tools/valid";
import { LiteralFuncType } from "@typings/tool";

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

// const registerFileNames = new Set()

export abstract class FileAbstract<D extends DataObject> implements ToStringAbstract {
    #context: Pack
    #namespace: string = ''
    private data: D | void
    readonly #description: string
    readonly #filename: string = ''

    constructor(filename: string, type: FileType | 'recipe', namespace?: string, description: LiteralFuncType = '') {
        emit('init', this)
        validPathName(filename)
        
        // const key = `${namespace}/${type}/${filename}`
        // registerFileNames.add(key)

        this.#filename = filename
        this.#namespace = namespace
        this.#description = typeof description === 'string' ? description : description({ filename, namespace }) // TODO modules可能有影响
    }

    /** * 获取Pack上下文 */
    public get context() { return this.#context }
    
    /** * 设置Pack上下文 */
    public set context(context: Pack) { this.#context = context }
   
    /** * 获取文件名 */
    public get filename() { return this.#filename }
   
    /** * 获取命名空间 */
    public get namespace() { return this.#namespace }

    /** * 设置命名空间 */
    public set namespace(namespace: string) { this.#namespace = namespace }
  
    /** * 获取描述信息 */
    public get description() { return this.#description }
    
    /**
     * 设置数据
     * @param data 用户自定义数据
     */
    public setData(data: D | void) { this.data = data }
  
    /**
     * 获取接口数据
     * @param flag 是否缓存引用的文件，默认true
     */
    public getData(flag = true): D {
        const context = useFile() as File
        // 缓存
        if (flag && !context.isFileCached(this)) {
            context.cacheFile(this)
        }
        // 加工数据
        if (this.data) {
            return Object.keys(this.data).reduce((s, k) => {
                const v = this.data[k]
                s[k] = v instanceof ContextAbstract ? v.setContext(context) : v
                return s
            }, {}) as D
        }
        return {} as D
    }
  
    /** * 获取全路径 */
    public abstract get fullname(): string
 
    /** * 添加项目 */
    public abstract add(value: unknown): void
 
    /** * 生成文件信息 */
    public abstract create(dir: string): FileInfo
 
    public toString() {
        const namespace = this.namespace ? this.namespace : 'minecraft'
        return `${namespace}:${this.filename}`
    }
  
    public toJson(): LineInfo {
        return {
            type: 'unknown',
            text: this.toString(),
        }
    }
}