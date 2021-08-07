import { MobBase } from "./shared";
import { int, float, InventoryItem } from "@shared/index";

export interface WanderingTrader extends Omit<MobBase, 'id'> {
	id: WanderingTraderId,
	DespawnDelay?: int,
	WanderTarget?: WanderTarget,
	Offers?: Offers,
	Inventory?: InventoryItem[]
}

export interface WanderTarget {
	X: int,
	Y: int,
	Z: int
}
export interface Offers {
	Recipes: Recipe[]
}
export interface Recipe {
	rewardExp?: boolean,
	maxUses?: int,
	uses?: int,
	buy: InventoryItem,
	buyB?: InventoryItem,
	sell: InventoryItem,
	xp?: int,
	priceMultiplier?: float,
	specialPrice?: int,
	demand?: int
}

export type WanderingTraderId = 'wandering_trader'