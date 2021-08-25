import { DataObject } from "@typings/base";
import { emit } from "../../plugin";
import { RecipeAbstract, RecipeOptions } from "./RecipeAbstract";

export interface StoneCuttingOptions<D extends DataObject> extends RecipeOptions<D> {
    render: (context: StoneCutting<any>) => D | void
}


export class StoneCutting<D extends DataObject> extends RecipeAbstract<'stonecutting', D> {
    constructor(options: StoneCuttingOptions<D>) {
        super(options)
        emit('init', this)
    }
}