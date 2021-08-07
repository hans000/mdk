import { File, ContextAbstract } from 'mdk-core'
import { Selector } from 'mdk-core'
import { recipe } from "../../function"

export class Recipe extends ContextAbstract {
    readonly #target: Selector

    constructor(context: File, target: Selector) {
        super(context)
        this.#target = target
        target.unexacted()
    }

    public give(recipeName = '*') {
        this.context.add(recipe.give(this.#target, recipeName))
    }

    public take(recipeName = '*') {
        this.context.add(recipe.take(this.#target, recipeName))
    }
}