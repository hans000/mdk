import { Selector } from 'mdk-core';

export default function give(target: Selector, itemId: string, count?: number) {
    return `give ${target.toString()} ${itemId}${count ? ' ' + count : ''}`
}