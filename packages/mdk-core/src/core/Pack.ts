import { isValidSpacename } from "../utils/rules"
import { versionCompare } from "../utils/version"
import { getRandomStr } from "../utils"
import { ContainerExpection, FieldExpection } from "../expection"
import { File } from "./file/function/File"
import { FileInfo, FileAbstract } from "./file/FileAbstract"
import { setPack } from "./hooks"
import { TextToken } from "@lib/text"
import { TagFile } from "."
import path from "@utils/path"

export interface PackOptions {
    /** 包名 */
    packname: string
    /** 加载的模块 */
    files?: FileAbstract<any>[]
    /** 游戏版本，应用于mcmeta.json */
    version?: string
    /** 描述，应用于mcmeta.json */
    description?: string | TextToken[]
    /** 是否开启作用域 */
    scope?: string | boolean
    /** 子模块 */
    modules?: Pack[]
    /** 数据包 */
    // packs?: Pack[]
}
interface Mcmeta {
    pack_format?: number,
    description?: string,
}

const __FileMap = new Map<string, FileAbstract<any>>()
const __PackMap = new Map<string, Pack>()
const cachePrefix = new Set<string>()
const packInfo: { [packname: string]: FileInfo[] } = {}
let __result: FileInfo[] = []


export class Pack {
    /** 作用域 */
    #scope: string | boolean
    readonly #options: PackOptions
    public isModule = false

    /**
     * * 1.13-1.14 版本为 4
     * * 1.15 版本为 5
     * * 1.16.2-1.16.4 版本为 6
     * * 1.17 版本为 7
     * @param gameVersion 游戏版本，例如1.17.1
     */
    public static getPackVersion(gameVersion = '') {
        if (gameVersion) {
            if (versionCompare(gameVersion, '1.13') === -1) { return 3 }
            if (versionCompare(gameVersion, '1.15') === -1) { return 4 }
            if (versionCompare(gameVersion, '1.16') === -1) { return 5 }
            if (versionCompare(gameVersion, '1.17') === -1) { return 6 }
        }
        return 7
    }
    public static cachePack(pack: Pack) {
        __PackMap.set(pack.packname, pack)
    }
    public static existPack(pack: Pack) {
        return __PackMap.has(pack.packname)
    }
    public static existFile(file: FileAbstract<any>) {
        const cfile = __FileMap.get(file.fullname)
        if (cfile) {
            return cfile !== file
        }
        return false
    }
    public static cacheFile(file: FileAbstract<any>) {
        if (Pack.existFile(file)) {
            throw ContainerExpection('file `', file.fullname, '` is existed in this pack!')
        }
        __FileMap.set(file.fullname, file)
    }

    constructor(props: PackOptions) {
        this.#options = { description: '', ...props }
        Pack.cachePack(this)
    }

    public load() {
        let { packname, scope, modules } = this.#options

        if (! isValidSpacename(packname)) {
            throw FieldExpection('packname `', packname, '` just uses lower chars, digital and - _')
        }
        
        /**
         * 处理scope
         * true 启用scope
         * false 关闭scope
         * 默认 - 只有
         * 显式赋值
         */
        if (typeof scope === 'string') {
            if (! isValidSpacename(scope)) {
                throw FieldExpection('scope `', scope, '` just uses lower chars, digital and - _')
            }
            cachePrefix.add(scope)
        } else if (scope === true) {
            scope = getRandomStr()
            while (cachePrefix.has(scope)) { scope = getRandomStr() }
            cachePrefix.add(scope)
        } else if (this.isModule && scope === undefined) {
            scope = packname
        }
        this.#scope = scope

        // 处理modules
        if (modules?.length) {
            for (const pack of modules) {
                pack.isModule = true
                pack.load()
            }
        }

        // 处理files
        setPack(this)
        this.#options?.files?.forEach(file => this.add(file))
    }

    public get packname() { return this.#options.packname }
    
    public get scope() { return this.#scope }
    
    public add(file: FileAbstract<any>) {
        file.context = this
        Pack.cacheFile(file)
    }

    public get mcmeta(): Mcmeta {
        return {
            description: this.#options.description.toString(),
            pack_format: Pack.getPackVersion(this.#options.version)
        }
    }
   
    private createMcmeta(): FileInfo {
        const name = this.packname + '/mcmeta.json'
        const text = JSON.stringify({ pack: this.mcmeta }, null, 4)
        return {
            name,
            type: 'mcmeta',
            text,
            description: '',
        }
    }
   
    private createFunctionTagFile(tagList: File[]) {
        tagList.forEach(file => {
            const key = path.join(file.tagNamespace, 'tags/functions', file.tag) + '.json'
            const tagFile = __FileMap.get(key) as TagFile<any>
            if (tagFile) {
                tagFile.add(file)
            } else {
                const newTagFile = new TagFile({
                    filename: `functions/${file.tag}` as const,
                    namespace: file.tagNamespace,
                    type: 'tags',
                    render(context) {
                        context.add(file)
                    }
                })
                Pack.cacheFile(newTagFile)
            }
        })
    }
   
    public create() {
        this.load()
        // 添加mcmeta
        __result.push(this.createMcmeta())

        const tagList = []

        // 添加mcfuntion
        // 使用forof，因为list文件是变化的
        for (const [fullname, file] of __FileMap) {
            if (file instanceof File && file.tag) {
                tagList.push(file)
            } else if (file instanceof TagFile) {
                continue
            }
            
            __result.push({
                ...file.create(this.packname),
                // name: fullname,
            })
        }
        
        this.createFunctionTagFile(tagList)
       
        // 添加tag json
        for (const [fullname, file] of __FileMap) {
            if (file instanceof TagFile) {
                __result.push({
                    ...file.create(this.packname),
                    // name: fullname,
                })
            }
        }

        packInfo[this.packname] = __result
        __result = []

        return packInfo 
    }
}
