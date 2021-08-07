import { File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { int } from 'mdk-nbt';
import experience, { XpType } from "../../function/experience";
import { ContextAbstract } from "mdk-core";

export class Experience extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public add(player: Selector, count: int): void
    public add(player: Selector, count: int, type: XpType): void
    public add(player: Selector, count: int, type?: XpType) {
        this.context.add(experience.add(player, count, type))
    }

    public set(player: Selector, count: int): void
    public set(player: Selector, count: int, type: XpType): void
    public set(player: Selector, count: int, type?: XpType) {
        this.context.add(experience.set(player, count, type))
    }
    public query(player: Selector): void
    public query(player: Selector, type: XpType): void
    public query(player: Selector, type?: XpType) {
        this.context.add(experience.query(player, type))
    }

}