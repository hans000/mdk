import { DataObject } from "@tools/typings";
import { emit } from "../../plugin";
import { RecipeAbstract, RecipeOptions } from "./RecipeAbstract";

export interface CraftingShapelessOptions<D extends DataObject> extends RecipeOptions<D> {
    render: (context: CraftingShapeless<any>) => D | void
}

export class CraftingShapeless<D extends DataObject> extends RecipeAbstract<'crafting_shapeless', D> {
    constructor(options: CraftingShapelessOptions<D>) {
        super(options)
        emit('init', this)
    }
}