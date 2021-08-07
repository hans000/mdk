import { int } from 'mdk-nbt'
import { ContextAbstract, File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { title } from "../../function"

export class Title extends ContextAbstract {
    readonly #target: Selector

    constructor(context: File, target: Selector) {
        super(context)
        this.#target = target
        target.unexacted()
    }

    /**
     * 移除屏幕标题
     */
    public clear() {
        this.context.add(title.clear(this.#target))
    }
    /**
     * 将各选项复位至默认值
     */
    public reset() {
        this.context.add(title.reset(this.#target))
    }
    /**
     * 将文字显示为主标题
     * @param text json文本
     */
    public title(text: string) {
        this.context.add(title.title(this.#target, text))
    }
    /**
     * 将文字显示为副标题
     * @param text json文本
     */
    public subtitle(text: string) {
        this.context.add(title.subtitle(this.#target, text))
    }
    /**
     * 在快捷栏上方显示的标题
     * @param text json文本
     */
    public actionbar(text: string) {
        this.context.add(title.actionbar(this.#target, text))
    }
    /**
     * 设置渐入、保持和渐出的持续时间
     * @param fadeIn 渐入
     * @param stay 保持
     * @param fadeOut 渐出
     */
    public times(fadeIn: int, stay: int, fadeOut: int) {
        this.context.add(title.times(this.#target, fadeIn, stay, fadeOut))
    }
}