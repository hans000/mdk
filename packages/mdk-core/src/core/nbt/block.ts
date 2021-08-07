import { NbtAbstract } from './NbtAbstract'
import { BlockEntity } from 'mdk-nbt'

export class NbtEntityBlock<T extends BlockEntity> extends NbtAbstract<T> {
    constructor(nbt: T) {
        super(nbt)
    }
}

export function createEntityBlock(nbt: BlockEntity) {
    return new NbtEntityBlock(nbt)
}