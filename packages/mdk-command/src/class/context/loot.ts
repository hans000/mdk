import { ContextAbstract, File, Selector } from "mdk-core"

export class Loot extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public spawn(location: string) {
        return new Source(this, `loot spawn ${location}`)
    }

    public replaceEntity(target: Selector | string, slot: string, count?: number) {
        return new Source(this, `loot replace entity ${target.toString()} ${slot}${count ? ' ' + count : ''}`)
    }

    public replaceBlock(location: string, slot: string, count?: number) {
        return new Source(this, `loot replace block ${location} ${slot}${count ? ' ' + count : ''}`)
    }

    public give(target: Selector | string) {
        return new Source(this, `loot give ${target.toString()}`)
    }

    public insert(location: string) {
        return new Source(this, `loot insert ${location}`)
    }

}

class Source {
    readonly #text: string
    readonly #context: Loot

    constructor(context: Loot, text: string) {
        this.#context = context
        this.#text = text
    }

    fish(loottable: string, location: string, tool?: string) {
        this.#context.context.add(`${this.#text} fish ${loottable} ${location}${tool ? ' ' + tool : ''}`)
        return this.#context
    }

    loot(loottable: string) {
        this.#context.context.add(`${this.#text} loot ${loottable}`)
        return this.#context
    }

    kill(target: Selector) {
        this.#context.context.add(`${this.#text} kill ${target.toString()}`)
        return this.#context
    }

    mine(location: string, tool?: string) {
        this.#context.context.add(`${this.#text} mine ${location}${tool ? ' ' + tool : ''}`)
        return this.#context
    }
}