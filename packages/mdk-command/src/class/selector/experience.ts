import { File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { int } from 'mdk-nbt';
import experience, { XpType } from "../../function/experience";
import { ContextAbstract } from "mdk-core";

export class Experience extends ContextAbstract {
    readonly #target: Selector

    constructor(context: File, target: Selector) {
        super(context)
        this.#target = target
        target.unexacted()
    }

    public add(count: int): void
    public add(count: int, type: XpType): void
    public add(count: int, type?: XpType) {
        this.context.add(experience.add(this.#target, count, type))
    }

    public set(count: int): void
    public set(count: int, type: XpType): void
    public set(count: int, type?: XpType) {
        this.context.add(experience.set(this.#target, count, type))
    }
    public query(): void
    public query(type: XpType): void
    public query(type?: XpType) {
        this.context.add(experience.query(this.#target, type))
    }

}