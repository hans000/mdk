import { BannerColorKind, int } from 'mdk-nbt'
import { Selector } from 'mdk-core'

export type BossbarType = 
    | 'max' 
    | 'players' 
    | 'value' 
    | 'visible'
export type BossbarStyle = 
    | 'progress' 
    | 'notched_6' 
    | 'notched_10' 
    | 'notched_12' 
    | 'notched_20'

export default {
    add,
    setStyle,
    setValue,
    setMax,
    setVisible,
    setPlayers,
    setColor,
    list,
    get,
    remove,
}

/**
 * 创建一个新的Boss栏。
 * @param id Boss栏id
 * @param name 显示名，JSON Text
 */
function add(id: string, name: string) {
    return `bossbar add ${id} ${name}`
}

/**
 * 列出已有的Boss栏。
 */
function list() {
    return `bossbar list`
}
/**
 * 列出已有的Boss栏。
 * @param id Boss栏id
 */
function remove(id: string) {
    return `bossbar remove ${id}`
}

/**
 * 获取设置类型的值，作为result使用
 * @param id Boss栏id
 * @param type 类型
 */
function get(id: string, type: BossbarType) {
    return `bossbar get ${id} ${type}`
}

//#region set 分支
/**
 * 设置Boss栏样式
 * @param id Boss栏id
 * @param style 样式
 */
function setStyle(id: string, style: BossbarStyle) {
    return `bossbar set ${id} style ${style}`
}
/**
 * 设置Boss栏当前值
 * @param id Boss栏id
 * @param value 数值
 */
function setValue(id: string, value: int) {
    return `bossbar set ${id} value ${value}`
}
/**
 * 设置Boss栏最大值
 * @param id Boss栏id
 * @param max 数值
 */
function setMax(id: string, max: int) {
    return `bossbar set ${id} max ${max}`
}
/**
 * 设置Boss栏是否可见
 * @param id Boss栏id
 * @param visible 是否可见
 */
function setVisible(id: string, visible: boolean) {
    return `bossbar set ${id} visible ${visible}`
}
function setPlayers(id: string): string;
function setPlayers(id: string, player: Selector): string;
function setPlayers(id: string, player?: Selector) {
    if (player as Selector) {
        return `bossbar set ${id} players ${player.toString()}`
    }
    return `bossbar set ${id} players`
}
/**
 * 设置Boss栏是否可见
 * @param id Boss栏id
 * @param color 颜色id 
 */
function setColor(id: string, color: BannerColorKind) {
    return `bossbar set color ${id} ${color}`
}
//#endregion