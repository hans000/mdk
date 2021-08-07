import { ItemBase } from "./shared";
import { int } from "@shared/__/numberic";
import { Display } from "./Map";

export interface LeatherArmor extends Partial<ItemBase> {
	id: LeatherArmorId,
	display?: ColorDisplay
}

export interface ColorDisplay extends Display {
	color: int
}

export type LeatherArmorId =
	| 'leather_helmet'
	| 'leather_chestplate'
	| 'leather_leggings'
	| 'leather_boots'
	| 'leather_horse_armor'