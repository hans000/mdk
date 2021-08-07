import { int } from 'mdk-nbt'
import { Selector } from 'mdk-core'

export default {
    clear,
    reset,
    title,
    subtitle,
    actionbar,
    times,
}
/**
 * 移除屏幕标题
 * @param player 玩家
 */
function clear(player: Selector) {
    return `title ${player.toString()} clear`
}
/**
 * 将各选项复位至默认值
 * @param player 玩家
 */
function reset(player: Selector) {
    return `title ${player.toString()} reset`
}
/**
 * 将文字显示为主标题
 * @param player 玩家
 * @param text json文本
 */
function title(player: Selector, text: string) {
    return `title ${player.toString()} title ${text}`
}
/**
 * 将文字显示为副标题
 * @param player 玩家
 * @param text json文本
 */
function subtitle(player: Selector, text: string) {
    return `title ${player.toString()} subtitle ${text}`
}
/**
 * 在快捷栏上方显示的标题
 * @param player 玩家
 * @param text json文本
 */
function actionbar(player: Selector, text: string) {
    return `title ${player.toString()} actionbar ${text}`
}
/**
 * 设置渐入、保持和渐出的持续时间
 * @param player 玩家
 * @param fadeIn 渐入
 * @param stay 保持
 * @param fadeOut 渐出
 */
function times(player: Selector, fadeIn: int, stay: int, fadeOut: int) {
    return `title ${player.toString()} times ${fadeIn} ${stay} ${fadeOut}`
}