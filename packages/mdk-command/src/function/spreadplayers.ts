import { float } from 'mdk-nbt';
import { Selector } from 'mdk-core';

/**
 * 把实体（如玩家、生物、物品等）随机传送到区域内地表的某个位置。
 * @param location 坐标x z
 * @param spreadDistance 扩散距离
 * @param maxRange 最大范围
 * @param respectTeams 考虑队伍
 * @param target 传送目标
 */
export default function(location: string, spreadDistance: float, maxRange: float, respectTeams: boolean, target: Selector) {
    return `spreadplayers ${location} ${spreadDistance} ${maxRange} ${respectTeams} ${target}`
}