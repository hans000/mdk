import { LiteralFuncType } from "@typings/tool";
import { DataObject } from "../../createFile";
import { emit } from "../../plugin";
import { RecipeAbstract, SmeltingType } from "./RecipeAbstract";


export class Smelting<D extends DataObject> extends RecipeAbstract<SmeltingType, D> {
    constructor(filename: string, namespace: string, description: LiteralFuncType = '') {
        super(filename, namespace, description)
        emit('init', this)
    }
}