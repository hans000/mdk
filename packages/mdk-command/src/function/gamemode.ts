import { GameMode } from 'mdk-nbt';
import { Selector } from 'mdk-core';

export default gamemode

/**
 * 设置玩家游戏模式 
 * @param mode 游戏模式
 */
function gamemode(mode: GameMode): string;
/**
 * 设置指定玩家的游戏模式
 * @param mode 游戏模式
 * @param player 玩家
 */
function gamemode(mode: GameMode, player: Selector): string;
function gamemode(mode: GameMode, player?: Selector) {
    if (player as Selector) {
        return `gamemode ${mode} ${player.toString()}`
    }
    return `gamemode ${mode}`
}