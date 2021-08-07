import { Selector } from 'mdk-core';


export default {
    spawn,
    replaceEntity,
    replaceBlock,
    give,
    insert,
}

function spawn(location: string) {
    return new Source(`loot spawn ${location}`)
}

function replaceEntity(target: Selector, slot: string, count?: number) {
    return new Source(`loot replace entity ${target.toString()} ${slot}${count ? ' ' + count : ''}`)
}

function replaceBlock(location: string, slot: string, count?: number) {
    return new Source(`loot replace block ${location} ${slot}${count ? ' ' + count : ''}`)
}

function give(target: Selector) {
    return new Source(`loot give ${target.toString()}`)
}

function insert(location: string) {
    return new Source(`loot insert ${location}`)
}

class Source {
    #text = ''

    constructor(text: string) {
        this.#text = text
    }

    fish(loottable: string, location: string, tool?: string) {
        return `${this.#text} fish ${loottable} ${location}${tool ? ' ' + tool : ''}`
    }

    loot(loottable: string) {
        return `${this.#text} loot ${loottable}`
    }

    kill(target: Selector) {
        return `${this.#text} kill ${target.toString()}`
    }

    mine(location: string, tool?: string) {
        return `${this.#text} mine ${location}${tool ? ' ' + tool : ''}`
    }
}