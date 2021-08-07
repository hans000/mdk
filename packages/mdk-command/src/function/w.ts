import { Selector } from 'mdk-core';

export default function(playerSelector: Selector, msg: string) {
    return `w ${playerSelector.toString()} ${msg}`
}