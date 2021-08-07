import { Selector } from 'mdk-core';

/**
 * 给予一位玩家管理员身份。
 * @param player 玩家
 */
export default function(player: Selector) {
    return `opo ${player.toString()}`
}