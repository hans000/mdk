import { ContextAbstract, File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { recipe } from "../../function"

export class Recipe extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public give(player: Selector, recipeName = '*') {
        this.context.add(recipe.give(player, recipeName))
        return this
    }

    public take(player: Selector, recipeName = '*') {
        this.context.add(recipe.take(player, recipeName))
        return this
    }
}