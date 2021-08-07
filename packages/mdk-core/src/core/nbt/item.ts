import { Item } from 'mdk-nbt'
import { NbtAbstract } from './NbtAbstract'

export class NbtItem<T extends Item> extends NbtAbstract<T> {
    constructor(nbt: T) {
        super(nbt)
    }
}

export function createItem(nbt: Item) {
    return new NbtItem(nbt)
}