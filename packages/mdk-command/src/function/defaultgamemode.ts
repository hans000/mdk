import { GameMode } from 'mdk-nbt';

/**
 * 设置新玩家进入服务器时默认的游戏模式（生存、创造等）。
 * @param mode 游戏模式
 */
export default function(mode: GameMode) {
    return `defaultgamemode ${mode}`
}