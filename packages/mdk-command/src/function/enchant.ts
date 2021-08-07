import { EnchantmentId, int } from 'mdk-nbt';
import { Selector } from 'mdk-core';

export default enchant

/**
 * 为一位玩家手持的物品添加魔咒。受限于铁砧机制。
 * @param player 玩家
 * @param enchantId 附魔id
 */
function enchant(player: Selector, enchantId: EnchantmentId): string;
/**
 * 为一位玩家手持的物品添加魔咒。
 * @param player 玩家
 * @param enchantId 附魔id
 * @param level 附魔等级
 */
function enchant(player: Selector, enchantId: EnchantmentId, level: int): string;
function enchant(player: Selector, enchantId: EnchantmentId, level?: int) {
    if (level as int) {
        return `enchant ${player.toString()} ${enchantId} ${level}`
    }
    return `enchant ${player.toString()} ${enchantId}`
}