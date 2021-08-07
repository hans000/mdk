import { LiteralFuncType } from "@typings/tool";
import { DataObject } from "../../createFile";
import { emit } from "../../plugin";
import { RecipeAbstract } from "./RecipeAbstract";


export class StoneCutting<D extends DataObject> extends RecipeAbstract<'stonecutting', D> {
    constructor(filename: string, namespace: string, description: LiteralFuncType = '') {
        super(filename, namespace, description)
        emit('init', this)
    }
}