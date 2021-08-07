import { ItemBase } from "./shared";
import { int } from "@shared/__/numberic";
import { PotionEffect } from "@shared/__/PotionEffect";

export interface EffectItem extends Partial<ItemBase> {
	id: EffectItemId,
	CustomPotionEffects?: PotionEffect[],
	Potion?: string,
	CustomPotionColor?: int
}

export type EffectItemId = 
	| 'potion' 
	| 'splash_potion' 
	| 'tipped_arrow' 
	| 'lingering_potion'
