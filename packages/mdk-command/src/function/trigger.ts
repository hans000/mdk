import { int } from 'mdk-nbt'

export default {
    add,
    set,
}
/**
 *  将新值追加到当前目标值上。
 * @param critera 目标
 * @param value 值
 */
function add(critera: string, value: int) {
    return `trigger ${critera} add ${value}`
}
/**
 *  将目标的当前值重设为新值。
 * @param critera 目标
 * @param value 值
 */
function set(critera: string, value: int) {
    return `trigger ${critera} set ${value}`
}