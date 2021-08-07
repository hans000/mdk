import { GameMode } from 'mdk-nbt';

/**
 * 设定难度等级
 * @param mode 游戏难度
 */
export function $function(mode: GameMode) {
    return `difficulty ${mode}`
}