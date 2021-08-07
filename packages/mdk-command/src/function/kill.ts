import { Selector } from 'mdk-core';

/**
 * 清除实体（玩家，生物，物品等）。
 * @param target 目标
 */
export default function(target: Selector) {
    return `kill ${target.toString()}`
}