import { ContextAbstract, Selector } from 'mdk-core'
import { File } from 'mdk-core'
import { int } from 'mdk-nbt'
import { XpType } from "../../function/experience"
import { xp } from "../../function"

export class Xp extends ContextAbstract {
    readonly #target: Selector

    constructor(context: File, target: Selector) {
        super(context)
        this.#target = target
    }
    /**
     * 给予玩家经验。
     * @param count 数量
     */
    public add(count: int): void
    /**
     * 给予玩家经验。
     * @param count 数量
     * @param type 类型
     */
    public add(count: int, type: XpType): void
    public add(count: int, type?: XpType) {
        this.context.add(xp.add(this.#target, count, type))
    }

    /**
     * 设置玩家经验。
     * @param count 数量
     */
    public set(count: int): void
    /**
     * 设置玩家经验。
     * @param count 数量
     * @param type 类型
     */
    public set(count: int, type: XpType): void
    public set(count: int, type?: XpType) {
        this.context.add(xp.set(this.#target, count, type))
    }
    /**
     * 查询玩家经验。
     */
    public query(type?: XpType) {
        this.context.add(xp.query(this.#target, type))
    }

}