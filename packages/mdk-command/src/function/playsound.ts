import { float } from 'mdk-nbt';
import { Selector } from 'mdk-core';

export default playsound

// TODO https://minecraft-zh.gamepedia.com/Sounds.json#.E5.A3.B0.E9.9F.B3.E4.BA.8B.E4.BB.B6

function playsound(soundPath: string, source: string, player: Selector) : string;
function playsound(soundPath: string, source: string, player: Selector, location: string) : string;
function playsound(soundPath: string, source: string, player: Selector, location: string, volume: float) : string;
function playsound(soundPath: string, source: string, player: Selector, location: string, volume: float, tone: float) : string;
function playsound(soundPath: string, source: string, player: Selector, location: string, volume: float, tone: float, minVolume: float) : string;
function playsound(soundPath: string, source: string, player: Selector, location?: string, volume?: float, tone?: float, minVolume?: float) {
    if (minVolume as float) {
        return `playsound ${soundPath} ${source} ${player.toString()} ${location} ${volume} ${tone} ${minVolume}`
    }
    if (tone as float) {
        return `playsound ${soundPath} ${source} ${player.toString()} ${location} ${volume} ${tone}`
    }
    if (volume as float) {
        return `playsound ${soundPath} ${source} ${player.toString()} ${location} ${volume}`
    }
    if (location as string) {
        return `playsound ${soundPath} ${source} ${player.toString()} ${location}`
    }
    return `playsound ${soundPath} ${source} ${player.toString()}`
}