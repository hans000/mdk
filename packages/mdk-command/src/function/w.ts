import { Selector } from 'mdk-core';

export default function(player: Selector, msg: string) {
    return `w ${player.toString()} ${msg}`
}