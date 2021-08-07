import { Selector } from 'mdk-core';

/**
 * 撤销玩家的管理员身份。
 * @param player 玩家
 */
export default function(player: Selector) {
    return `deop ${player.toString()}`
}