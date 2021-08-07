import { ItemBase } from "./shared";

export interface KnowlegeBook extends Partial<ItemBase> {
	id: KnowlegeBookId
	Recipes?: string[],
}

export type KnowlegeBookId = 'knowlege_book'
