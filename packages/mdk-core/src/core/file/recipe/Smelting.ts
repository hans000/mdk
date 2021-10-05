import { DataObject } from "@tools/typings";
import { emit } from "../../plugin";
import { RecipeAbstract, RecipeOptions, SmeltingType } from "./RecipeAbstract";

export interface SmeltingOptions<D extends DataObject> extends RecipeOptions<D> {
    render: (context: Smelting<any>) => D | void
}

export class Smelting<D extends DataObject> extends RecipeAbstract<SmeltingType, D> {
    constructor(options: SmeltingOptions<D>) {
        super(options)
        emit('init', this)
    }
}