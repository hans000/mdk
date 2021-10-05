import { ItemId } from "mdk-nbt"
import { int } from 'mdk-nbt'
import path from "@utils/path"
import { emit } from "../../plugin"
import { FileAbstract, FileAbstractOptions, FileInfo } from "../FileAbstract"
import { popFile, usePack } from "@/hooks"
import { FieldExpection } from "@tools/expection"
import { DataObject } from "@tools/typings"

export type RecipeType =
    | 'crafting_shaped'     /** 有序合成 */
    | 'crafting_shapeless'  /** 无序合成 */
    | 'stonecutting'        /** 切石机配方 */
    | 'smelting'            /** 熔炉配方 */
    | 'blasting'            /** 高炉配方 */
    | 'smoking'             /** 烟熏炉配方 */
    | 'campfire_cooking'    /** 营火配方 */
    | 'smithing'            /** 锻造台配方 */

export type RecipeItem = { item: ItemId } | { tag: string } | Array<{ item: ItemId }>
export type RecipeItemArray = Array<{ item: ItemId }>
export type RecipeResult = { item: ItemId; count?: number }
export type SmeltingType = 'smelting' | 'blasting' | 'smoking' | 'campfire_cooking'

export interface RecipeProps<T extends RecipeType> {
    /** 类型 */
    type: T
    /** 分组 */
    group?: string
    /** 经验值 */
    experience?: T extends SmeltingType ? number : never
    /** 烧炼时间 */
    cookingtime?: T extends SmeltingType ? int : never
    /** 仅锻造用，要升级的物品 */
    base?: T extends 'smithing' ? RecipeItem : never
    /** 仅锻造用，升级所需的消耗品 */
    addition?: T extends 'smithing' ? RecipeItem : never
    /** 模式，仅用于有序合成 */
    pattern?: T extends 'crafting_shaped' ? string[] : never
    /** 仅用于有序合成 */
    key?: T extends 'crafting_shaped' ? Record<string, RecipeItem | RecipeItemArray> : never
    /** 仅用于无序合成 */
    ingredients?: T extends 'crafting_shapeless' ? RecipeItem | RecipeItemArray : never
    /** 仅用烧炼用 */
    ingredient?: T extends SmeltingType ? RecipeItem | RecipeItemArray : never
    /** 结果 */
    result: RecipeResult
}
export interface RecipeOptions<D extends DataObject> extends FileAbstractOptions<D> {
    /** 渲染入口 */
    render: (context: RecipeAbstract<RecipeType, any>) => D | void
}
export abstract class RecipeAbstract<T extends RecipeType, D extends DataObject> extends FileAbstract<D> {
    #list: RecipeProps<T>[] = []
    
    constructor(options: RecipeOptions<any>) {
        super({
            filename: options.filename,
            namespace: options.namespace,
            description: options.description || '',
            render: options.render,
            type: 'recipes',
        })
        emit('init', this)
    }
    
    public override add(props: RecipeProps<T>) {
        this.#list.push(props)
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
        this.load(true)
        const name = path.join(dir, 'data', this.fullname)
        if (!this.#list.length) {
            throw FieldExpection('`' + name + '` data is empty, please add one')
        }
        const text = JSON.stringify(this.#list[0], null, 4)
        return {
            name,
            type: 'recipe',
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