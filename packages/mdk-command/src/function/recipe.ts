import { Selector } from 'mdk-core';

export default {
    give,
    take,
}

/**
 * 给予玩家合成配方
 * @param player 玩家
 * @param recipeName 配方名
 */
function give(player: Selector, recipeName = '*') {
    return `recipe give ${player} ${recipeName}`
}

/**
 * 剥夺玩家合成配方
 * @param player 玩家
 * @param recipeName 配方名
 */
function take(player: Selector, recipeName = '*') {
    return `recipe take ${player} ${recipeName}`
}