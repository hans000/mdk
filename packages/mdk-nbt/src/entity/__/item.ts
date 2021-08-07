import { InventoryItem, short, long } from "@shared/index";
import { EntityBase } from "./shared";

export type EntityItemId = 'item'

export interface EntityItem extends EntityBase {
	id: EntityItemId,
	Age?: short,
	Health?: short,
	PickupDelay?: short,
	Owner?: UUID,
	Thrower?: UUID,
	Item?: InventoryItem
}

export interface UUID {
	L: long,
	M: long
}
