import { Breedable } from "./shared"
import { InventoryItem, SlottedItem, int } from "@shared/index"

export interface Llama extends Omit<Breedable, 'id'> {
	id: LlamaId | TraderLlamaId,
	Bred?: boolean,
	EatingHaystack?: boolean,
	Tame?: boolean,
	Temper?: int,
	OwnerUUID?: string,
	DecorItem?: InventoryItem,
	ChestedHorse?: boolean,
	Items?: SlottedItem[],
	Strength?: int,
	Variant?: VariantKind
}

export enum VariantKind {
	Creamy = 0,
	White = 1,
	Brown = 2,
	Gray = 3
}

export interface TraderLlama extends Llama {
	id: TraderLlamaId,
	DespawnDelay?: int
}

export type LlamaId = 'llama'
export type TraderLlamaId = 'trader_llama'