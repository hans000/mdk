import { Selector } from 'mdk-core';

export default function(playerSelector: Selector, msg: string) {
    return `msg ${playerSelector.toString()} ${msg}`
}