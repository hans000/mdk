import { Selector } from 'mdk-core';
import { int } from 'mdk-nbt';

export enum XpTypeKind {
    points = 'points',
    levels = 'levels',
}
export type XpType = XpTypeKind | keyof typeof XpTypeKind


export default {
    add,
    set,
    query
}

/**
 * 给予玩家经验。
 * @param player 玩家
 * @param count 数量
 */
function add(player: Selector, count: int): string;
/**
 * 给予玩家经验。
 * @param player 玩家
 * @param count 数量
 * @param type 类型
 */
function add(player: Selector, count: int, type: XpType): string;
function add(player: Selector, count: int, type?: XpType) {
    if (type as XpType) {
        return `xp add ${player.toString()} ${count} ${type}`
    }
    return `xp add ${player.toString()} ${count}`
}
/**
 * 设置玩家经验。
 * @param player 玩家
 * @param count 数量
 */
function set(player: Selector, count: int): string;
/**
 * 设置玩家经验。
 * @param player 玩家
 * @param count 数量
 * @param type 类型
 */
function set(player: Selector, count: int, type: XpType): string;
function set(player: Selector, count: int, type?: XpType) {
    if (type as XpType) {
        return `xp set ${player.toString()} ${count} ${type}`
    }
    return `xp set ${player.toString()} ${count}`
}
/**
 * 查询玩家经验。
 * @param player 玩家
 */
function query(player: Selector): string;
/**
 * 查询玩家经验。
 * @param player 玩家
 * @param type 模式
 */
function query(player: Selector, type: XpType): string;
function query(player: Selector, type?: XpType) {
    if (type as XpType) {
        return `xp query ${player.toString()} ${type}`
    }
    return `xp query ${player.toString()}`
}