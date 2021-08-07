import { SoundType } from 'mdk-nbt';
import { Selector } from 'mdk-core';

export default stopsound

/**
 * 停止声音播放
 * @param player 玩家
 */
function stopsound(player: Selector): string;
/**
 * 停止声音播放
 * @param player 玩家
 * @param source 来源
 */
function stopsound(player: Selector, source: string): string;
/**
 * 停止声音播放
 * @param player 玩家
 * @param source 来源
 * @param soundPath 
 */
function stopsound(player: Selector, source: SoundType, soundPath: string): string;
function stopsound(player: Selector, source?: SoundType, soundPath?: string) {
    if (soundPath as string) {
        return `stopsound ${player.toString()} ${source} ${soundPath}`
    }
    if (source as SoundType) {
        return `stopsound ${player.toString()} ${source}`
    }
    return `stopsound ${player.toString()}`
}