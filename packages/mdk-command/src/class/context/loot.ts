import { File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { ContextAbstract } from "mdk-core";

export class Loot extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public spawn(location: string) {
        return new Source(this.context, `loot spawn ${location}`)
    }

    public replaceEntity(target: Selector, slot: string, count?: number) {
        return new Source(this.context, `loot replace entity ${target.toString()} ${slot}${count ? ' ' + count : ''}`)
    }

    public replaceBlock(location: string, slot: string, count?: number) {
        return new Source(this.context, `loot replace block ${location} ${slot}${count ? ' ' + count : ''}`)
    }

    public give(target: Selector) {
        return new Source(this.context, `loot give ${target.toString()}`)
    }

    public insert(location: string) {
        return new Source(this.context, `loot insert ${location}`)
    }

}

class Source {
    private text = ''
    #context: File

    constructor(context: File, text: string) {
        this.text = text
        this.#context = context
    }

    fish(loottable: string, location: string, tool?: string) {
        this.#context.add(`${this.text} fish ${loottable} ${location}${tool ? ' ' + tool : ''}`)
        return this
    }

    loot(loottable: string) {
        this.#context.add(`${this.text} loot ${loottable}`)
        return this
    }

    kill(target: Selector) {
        this.#context.add(`${this.text} kill ${target.toString()}`)
        return this
    }

    mine(location: string, tool?: string) {
        this.#context.add(`${this.text} mine ${location}${tool ? ' ' + tool : ''}`)
        return this
    }
}