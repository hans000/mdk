import { File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { int } from 'mdk-nbt';
import experience, { XpType } from "../../function/experience";
import { ContextAbstract } from "mdk-core";

export class Experience extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public add(player: Selector, count: int): Experience
    public add(player: Selector, count: int, type: XpType): Experience
    public add(player: Selector, count: int, type?: XpType) {
        this.context.add(experience.add(player, count, type))
        return this
    }

    public set(player: Selector, count: int): Experience
    public set(player: Selector, count: int, type: XpType): Experience
    public set(player: Selector, count: int, type?: XpType) {
        this.context.add(experience.set(player, count, type))
        return this
    }
    public query(player: Selector): Experience
    public query(player: Selector, type: XpType): Experience
    public query(player: Selector, type?: XpType) {
        this.context.add(experience.query(player, type))
        return this
    }
}