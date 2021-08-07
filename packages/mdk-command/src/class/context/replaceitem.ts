
import { int } from 'mdk-nbt';
import { File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { replaceitem } from "../../function";
import { ContextAbstract } from "mdk-core";

export class ReplaceItem extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public block(location: string, slot: int, item: string): void
    public block(location: string, slot: int, item: string, count: int): void
    public block(location: string, slot: int, item: string, count?: int) {
        this.context.add(replaceitem.block(location, slot, item, count))
    }

    public entity(target: Selector, slot: int, item: string): void
    public entity(target: Selector, slot: int, item: string, count: int): void
    public entity(target: Selector, slot: int, item: string, count?: int) {
        this.context.add(replaceitem.entity(target, slot, item, count))
    }
}