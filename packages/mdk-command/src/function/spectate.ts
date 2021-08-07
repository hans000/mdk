import { Selector } from 'mdk-core';

export default function spectate(target: Selector, player: string) {
    return `spectate ${target.toString()} ${player}`
}