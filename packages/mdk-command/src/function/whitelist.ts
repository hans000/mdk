import { Selector } from 'mdk-core';

export default {
    add,
    remove,
    list: () => 'whitelist list',
    off: () => 'whitelist off',
    on: () => 'whitelist on',
    reload: () => 'whitelist reload',
}

/**
 * 将玩家名添加到白名单。该玩家不需要在线。
 * @param player 玩家
 */
function add(player: Selector) {
    return `whitelist add ${player.toString()}`
}

/**
 * 将玩家名添加到白名单。该玩家不需要在线。
 * @param player 玩家
 */
function remove(player: Selector) {
    return `whitelist remove ${player.toString()}`
}
