import { Selector } from 'mdk-core';

/**
 * 为特定玩家设置出生点。
 * @param playerSelector 玩家
 * @param location 坐标
 */
export default function spawnpoint(playerSelector: Selector, location: string) {
    return `spawnpoint ${playerSelector.toString()} ${location}`
}