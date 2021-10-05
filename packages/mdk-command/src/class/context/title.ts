import { int } from 'mdk-nbt'
import { ContextAbstract, File, Selector } from 'mdk-core'
import { title } from "../../function"

export class Title extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    /**
     * 移除屏幕标题
     * @param player 玩家
     */
    public clear(player: Selector) {
        this.context.add(title.clear(player))
        return this
    }
    /**
     * 将各选项复位至默认值
     * @param player 玩家
     */
    public reset(player: Selector) {
        this.context.add(title.reset(player))
        return this
    }
    /**
     * 将文字显示为主标题
     * @param player 玩家
     * @param text json文本
     */
    public title(player: Selector, text: string) {
        this.context.add(title.title(player, text))
        return this
    }
    /**
     * 将文字显示为副标题
     * @param player 玩家
     * @param text json文本
     */
    public subtitle(player: Selector, text: string) {
        this.context.add(title.subtitle(player, text))
        return this
    }
    /**
     * 在快捷栏上方显示的标题
     * @param player 玩家
     * @param text json文本
     */
    public actionbar(player: Selector, text: string) {
        this.context.add(title.actionbar(player, text))
        return this
    }
    /**
     * 设置渐入、保持和渐出的持续时间
     * @param player 玩家
     * @param fadeIn 渐入
     * @param stay 保持
     * @param fadeOut 渐出
     */
    public times(player: Selector, fadeIn: int, stay: int, fadeOut: int) {
        this.context.add(title.times(player, fadeIn, stay, fadeOut))
        return this
    }
}