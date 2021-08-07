import { LiteralFuncType } from "@typings/tool";
import { DataObject } from "../../createFile";
import { emit } from "../../plugin";
import { RecipeAbstract } from "./RecipeAbstract";

export class CraftingShaped<D extends DataObject> extends RecipeAbstract<'crafting_shaped', D> {
    constructor(filename: string, namespace: string, description: LiteralFuncType = '') {
        super(filename, namespace, description)
        emit('init', this)
    }
}