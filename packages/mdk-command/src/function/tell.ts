import { Selector } from 'mdk-core';

export default function(playerSelector: Selector, msg: string) {
    return `tell ${playerSelector.toString()} ${msg}`
}