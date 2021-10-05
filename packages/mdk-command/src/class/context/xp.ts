import { File, ContextAbstract } from 'mdk-core'
import { Selector } from 'mdk-core'
import { XpType } from "../../function/experience"
import { xp } from "../../function"
import { int } from 'mdk-nbt'

export class Xp extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }
    /**
     * 给予玩家经验。
     * @param player 玩家
     * @param count 数量
     */
    public add(player: Selector, count: int): Xp
    /**
     * 给予玩家经验。
     * @param player 玩家
     * @param count 数量
     * @param type 类型
     */
    public add(player: Selector, count: int, type: XpType): Xp
    public add(player: Selector, count: int, type?: XpType) {
        this.context.add(xp.add(player, count, type))
        return this
    }

    /**
     * 设置玩家经验。
     * @param player 玩家
     * @param count 数量
     */
    public set(player: Selector, count: int): Xp
    /**
     * 设置玩家经验。
     * @param player 玩家
     * @param count 数量
     * @param type 类型
     */
    public set(player: Selector, count: int, type: XpType): Xp
    public set(player: Selector, count: int, type?: XpType) {
        this.context.add(xp.set(player, count, type))
        return this
    }
    /**
     * 查询玩家经验。
     * @param player 玩家
     */
    public query(player: Selector): Xp
    /**
     * 查询玩家经验。
     * @param player 玩家
     * @param type 模式
     */
    public query(player: Selector, type: XpType): Xp
    public query(player: Selector, type?: XpType) {
        this.context.add(xp.query(player, type))
        return this
    }

}