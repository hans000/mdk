import { int } from 'mdk-nbt';
import { Selector } from 'mdk-core';

export default {
    block,
    entity,
}
/**
 * 替换方块（箱子，熔炉等）物品栏内的物品。
 * @param location 坐标
 * @param slot 栏位
 * @param item 物品
 */
function block(location: string, slot: int, item: string): string;
/**
 * 替换方块（箱子，熔炉等）物品栏内的物品。
 * @param location 坐标
 * @param slot 栏位
 * @param item 物品
 * @param count 数量
 */
function block(location: string, slot: int, item: string, count: int): string;
function block(location: string, slot: int, item: string, count?: int) {
    if (count as int) {
        return `replaceitem block ${location} ${slot} ${item} ${count}`
    }
    return `replaceitem block ${location} ${item} ${slot}`
}
/**
 * 替换实体（玩家或生物）物品栏内的物品。
 * @param target 实体
 * @param slot 栏位
 * @param item 物品
 */
function entity(target: Selector, slot: int, item: string): string;
/**
 * 替换实体（玩家或生物）物品栏内的物品。
 * @param target 实体
 * @param slot 栏位
 * @param item 物品
 * @param count 数量
 */
function entity(target: Selector, slot: int, item: string, count: int): string;
function entity(target: Selector, slot: int, item: string, count?: int) {
    if (count as int) {
        return `replaceitem block ${target.toString()} ${slot} ${item} ${count}`
    }
    return `replaceitem block ${target.toString()} ${slot} ${item}`
}