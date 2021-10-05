import { DataObject } from "@tools/typings";
import { emit } from "../../plugin";
import { RecipeAbstract, RecipeOptions } from "./RecipeAbstract";

export interface SmithingOptions<D extends DataObject> extends RecipeOptions<D> {
    render: (context: Smithing<any>) => D | void
}

export class Smithing<D extends DataObject> extends RecipeAbstract<'smithing', D> {
    constructor(options: SmithingOptions<D>) {
        super(options)
        emit('init', this)
    }
}