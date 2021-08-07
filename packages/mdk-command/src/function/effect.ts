import { EffectId, int, byte } from 'mdk-nbt';
import { Selector } from 'mdk-core';

export default {
    clear,
    give,
}

/**
 * 移除一个或所有效果
 * @param player 玩家选择器
 */
function clear(player: Selector): string;
/**
 * 移除一个或所有效果
 * @param player 玩家选择器
 * @param effectId 效果id
 */
function clear(player: Selector, effectId: EffectId): string;
function clear(player: Selector, effectId?: EffectId) {
    if (effectId as EffectId) {
        return `effect clear ${player.toString()} ${effectId}`
    }
    return `effect clear ${player.toString()}`
}

/**
 * 给予一种效果
 * @param player 玩家选择器
 * @param effectId 效果id
 */
function give(player: Selector, effectId: EffectId): string;
/**
 * 给予一种效果
 * @param player 玩家选择器
 * @param effectId 效果id
 * @param duration 持续时间
 */
function give(player: Selector, effectId: EffectId, duration: int): string;
/**
 * 给予一种效果
 * @param player 玩家选择器
 * @param effectId 效果id
 * @param duration 持续时间
 * @param amplifier 等级
 */
function give(player: Selector, effectId: EffectId, duration: int, amplifier: byte): string;
/**
 * 给予一种效果
 * @param player 玩家选择器
 * @param effectId 效果id
 * @param duration 持续时间
 * @param amplifier 等级
 * @param hideParticles 是否隐藏粒子效果
 */
function give(player: Selector, effectId: EffectId, duration: int, amplifier: byte, hideParticles: boolean): string;
function give(player: Selector, effectId: EffectId, duration?: int, amplifier?: byte, hideParticles?: boolean) {
    if (hideParticles as boolean) {
        return `effect give ${player.toString()} ${effectId} ${duration} ${amplifier} ${hideParticles}`
    }
    if (amplifier as byte) {
        return `effect give ${player.toString()} ${effectId} ${duration} ${amplifier}`
    }
    if (duration as int) {
        // ToDo 校验 0 - 2,147,483,647
        return `effect give ${player.toString()} ${effectId} ${duration}`
    }
    return `effect give ${player.toString()} ${effectId}`
}