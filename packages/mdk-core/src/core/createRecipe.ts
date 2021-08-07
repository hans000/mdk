import { LiteralFuncType } from "@typings/tool";
import { DataObject } from "./createFile";
import { CraftingShaped, CraftingShapeless, FileAbstract, RecipeType, Smelting, Smithing, StoneCutting } from "./file";
import { setFile } from "./hooks/useFile";

type MapRecipeFile<D extends DataObject = {}> = {
    crafting_shaped: CraftingShaped<D>
    crafting_shapeless: CraftingShapeless<D>
    stonecutting: StoneCutting<D>
    smelting: Smelting<D>
    blasting: Smelting<D>
    smoking: Smelting<D>
    campfire_cooking: Smelting<D>
    smithing: Smithing<D>
}

export interface SerialRecipeFile<D extends DataObject, T extends RecipeType> {
    filename: string
    namespace?: string
    type?: T
    description?: LiteralFuncType
    render: (context: MapRecipeFile<any>[T]) => D | void
}

export function createRecipe<D extends DataObject, T extends RecipeType = 'crafting_shaped'>(recipeProps: SerialRecipeFile<D, T>): MapRecipeFile<D>[T] {
    const { filename, namespace, type, render, description } = recipeProps
    let file: FileAbstract<D>
    if (type === 'crafting_shaped') {
        file = new CraftingShaped<D>(filename, namespace, description)
    } else if (type === 'crafting_shapeless') {
        file = new CraftingShapeless<D>(filename, namespace, description)
    } else if (type === 'stonecutting') {
        file = new StoneCutting<D>(filename, namespace, description)
    } else if (type === 'smithing') {
        file = new Smithing<D>(filename, namespace, description)
    } else {
        file = new Smelting<D>(filename, namespace, description)
    }
    // 更新当前上下文对象
    setFile(file)
    // 执行渲染并设置自定义数据
    file.setData(render(file as MapRecipeFile<D>[T]))
    // 重置上下文对象
    setFile(null)
    return file as never
}