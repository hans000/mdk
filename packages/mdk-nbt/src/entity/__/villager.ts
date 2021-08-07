import { Breedable } from "./shared"
import { long, int, float, InventoryItem } from "@shared/index"

export interface Villager extends Omit<Breedable, 'id'> {
	id: VillagerId,
	Willing?: boolean,
	VillagerData?: VillagerData,
	Gossips?: Partial<Gossip>[],
	LastRestock?: long,
	LastGossipDecay?: long,
	RestocksToday?: int,
	Xp?: int,
	Inventory?: InventoryItem[],
	Offers?: VillagerOffers
}

export interface VillagerData {
	level: int,
	profession: string,
	type: string
}

export interface Gossip {
	Type: GossipType,
	Value: int,
	TargetMost: long,
	TargetLeast: long
}

export type GossipType =
	| "major_negative"
	| "minor_negative"
	| "major_positive"
	| "minor_positive" 
	| "trading"

export interface VillagerOffers {
	Recipes: VillagerRecipe[]
}

export interface VillagerRecipe {
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

export type VillagerId = 'villager'