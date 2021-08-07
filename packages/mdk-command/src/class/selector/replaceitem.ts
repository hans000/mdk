
import { int } from 'mdk-nbt';
import { Selector } from 'mdk-core';
import { File } from 'mdk-core';
import { replaceitem } from "../../function";
import { ContextAbstract } from "mdk-core";

export class ReplaceItem extends ContextAbstract {
    readonly #target: Selector

    constructor(context: File, target: Selector) {
        super(context)
        this.#target = target
        target.unexacted()
    }

    public block(location: string, slot: int, item: string): void
    public block(location: string, slot: int, item: string, count: int): void
    public block(location: string, slot: int, item: string, count?: int) {
        this.context.add(replaceitem.block(location, slot, item, count))
    }

    public entity(slot: int, item: string): void
    public entity(slot: int, item: string, count: int): void
    public entity(slot: int, item: string, count?: int) {
        this.context.add(replaceitem.entity(this.#target, slot, item, count))
    }
}