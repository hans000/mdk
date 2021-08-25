import { DataObject } from "@typings/base";
import { emit } from "../../plugin";
import { RecipeAbstract, RecipeOptions } from "./RecipeAbstract";

export interface CraftingShapedOptions<D extends DataObject> extends RecipeOptions<D> {
    render: (context: CraftingShaped<any>) => D | void
}

export class CraftingShaped<D extends DataObject> extends RecipeAbstract<'crafting_shaped', D> {
    constructor(options: CraftingShapedOptions<D>) {
        super(options)
        emit('init', this)
    }
}