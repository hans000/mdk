import { File, ContextAbstract } from 'mdk-core'
import { Selector } from 'mdk-core'
import { XpType } from "../../function/experience"
import { xp } from "../../function"
import { int } from 'mdk-nbt'

export default class Experience extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }
    /**
     * 给予玩家经验。
     * @param player 玩家
     * @param count 数量
     */
    public add(player: Selector, count: int): void
    /**
     * 给予玩家经验。
     * @param player 玩家
     * @param count 数量
     * @param type 类型
     */
    public add(player: Selector, count: int, type: XpType): void
    public add(player: Selector, count: int, type?: XpType) {
        this.context.add(xp.add(player, count, type))
    }

    /**
     * 设置玩家经验。
     * @param player 玩家
     * @param count 数量
     */
    public set(player: Selector, count: int): void
    /**
     * 设置玩家经验。
     * @param player 玩家
     * @param count 数量
     * @param type 类型
     */
    public set(player: Selector, count: int, type: XpType): void
    public set(player: Selector, count: int, type?: XpType) {
        this.context.add(xp.set(player, count, type))
    }
    /**
     * 查询玩家经验。
     * @param player 玩家
     */
    public query(player: Selector): void
    /**
     * 查询玩家经验。
     * @param player 玩家
     * @param type 模式
     */
    public query(player: Selector, type: XpType): void
    public query(player: Selector, type?: XpType) {
        this.context.add(xp.query(player, type))
    }

}