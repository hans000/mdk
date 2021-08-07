import { int } from 'mdk-nbt';
import { Selector } from 'mdk-core';

/**
* 清空玩家物品栏的物品。
*/
function clear(): string;
/**
* 清空玩家物品栏的物品。
* @param target 目标
*/
function clear(target: Selector): string;
/**
 * 清空玩家物品栏的物品。
 * @param target 目标
 * @param item 物品
 */
function clear(target: Selector, item: string): string;
/**
 * 清空玩家物品栏的物品。
 * @param target 目标
 * @param item 物品
 * @param maxCount 数量
 */
function clear(target: Selector, item: string, maxCount: int): string;

function clear(target?: Selector, item?: string, maxCount?: int) {
    if (maxCount) return `clear ${target.toString()} ${item} ${maxCount}`
    if (item) `clear ${target.toString()} ${item}`
    if (target) return `clear ${target.toString()}`
    return 'clear'
}

export default clear