import { isValidSpacename } from "../utils/rules"
import { versionCompare } from "../utils/version"
import { getRandomStr } from "../utils"
import { TagFile } from './file'
import { PackOptions } from "./createPack"
import { ContainerExpection, FieldExpection } from "../expection"
import { File } from "./file/function/File"
import { createFile } from "."
import path from "@utils/path"
import { JText } from "@lib/index"
import { FileInfo, FileAbstract } from "./file/FileAbstract"

interface Mcmeta {
    pack_format?: number,
    description: string,
}

// const cachePack = new Map<string, Pack>()
const cachePrefix = new Set<string>()
const packInfo: { [packname: string]: FileInfo[] } = {}
let __result: FileInfo[] = []

export class Pack {
    // readonly #packs: Pack[] = []
    readonly #list: FileAbstract<any>[] = []
    readonly #mcmeta: Mcmeta = { pack_format: Pack.getPackVersion(), description: '' }
    readonly #packname: string;
    readonly #fileMap = new Map<string, FileAbstract<any>>();
    /** 作用域 */
    readonly #scope: string | boolean;

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

    constructor(props: Omit<PackOptions, 'files'>) {
        let { packname, scope, description, version, modules } = props

        if (! isValidSpacename(packname)) {
            throw FieldExpection('packname `', packname, '` just uses lower chars, digital and - _')
        }
        
        if (typeof scope === 'string' && scope) {
            cachePrefix.add(scope)
        } else if (scope !== false) {
            scope = getRandomStr()
            while (cachePrefix.has(scope)) {
                getRandomStr()
            }
        }
        
        if (modules) {
            for (const pack of modules) {
                pack.list.forEach(file => {
                    if (! file.namespace) {
                        file.namespace = pack.packname
                    }
                    this.add(file)
                })
            }
        }
       
        //#region // TODO 根据需求
        // if (packs) {
        //     for (const pack of packs) {
        //         const packname = pack.packname
        //         if (cachePack.has(pack)) {
        //             throw ContainerExpection('`' + packname + '` packname has existed in current program')
        //         }
        //         cachePack.set(packname, pack)
        //         packInfo[packname] = pack.create()[packname]
        //     }
        // }
        // this.#packs = packs || []
        //#endregion
        
        this.#packname = packname
        this.#scope = scope
        this.#mcmeta.description = description instanceof JText ? description.toString() : description
        this.#mcmeta.pack_format = Pack.getPackVersion(version)
    }

    public get packname() { return this.#packname }
    
    public get scope() { return this.#scope }
    
    public get list() { return this.#list }

    public add(files: FileAbstract<any> | FileAbstract<any>[]) {
        const arr = Array.isArray(files) ? files : [files]
        for (const file of arr) {
            const fullname = file.fullname
            
            if (! this.#fileMap.has(fullname)) {
                this.#fileMap.set(fullname, file)
                file.context = this
                this.#list.push(file)
            }
            if (this.exist(file)) {
                throw ContainerExpection('file `', fullname, '` is existed in this pack!')
            }
        }
    }
   
    public exist(name: string): boolean
    public exist(file: FileAbstract<any>): boolean
    public exist(arg: string | FileAbstract<any>) {
        if (arg instanceof FileAbstract) {
            const file = this.#list.find(file => file.filename === arg.filename)
            // 两者引用不同说明已存在
            return file ? file !== arg : false
        }
        return this.#list.some(v => v.filename === arg)
    }
   
    private createMcmeta(): FileInfo {
        const name = this.#packname + '/mcmeta.json'
        const text = JSON.stringify({ pack: this.#mcmeta }, null, 4)
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
            const tagFile = this.#fileMap.get(key) as TagFile<any>
            if (tagFile) {
                tagFile.add(file)
            } else {
                const newTagFile = createFile({
                    filename: `functions/${file.tag}` as const,
                    namespace: file.tagNamespace,
                    type: 'tags',
                    render(context) {
                        context.add(file)
                    }
                })
                this.#fileMap.set(key, newTagFile)
            }
        })
    }
   
    public create() {
        // 添加mcmeta
        __result.push(this.createMcmeta())

        const tagList = []
        // 添加mcfuntion
        // 使用forof，因为list文件是变化的
        for (const file of this.#list) {
            if (file instanceof File && file.tag) {
                tagList.push(file)
            }
            if (file instanceof TagFile) {
                this.#fileMap.set(file.fullname, file)
                continue
            }
            __result.push(file.create(this.packname))
        }
        this.createFunctionTagFile(tagList)
        this.#fileMap.forEach(file => {
            if (file instanceof TagFile) {
                __result.push(file.create(this.packname))
            }
        })
        packInfo[this.packname] = __result
        __result = []
        return packInfo
    }
}
