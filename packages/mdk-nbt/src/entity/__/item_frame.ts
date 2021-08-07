import { Facing6, InventoryItem, int, float, byte } from "@shared/index";
import { EntityBase } from "./shared";

export type ItemFrameId = 'item_frame'

export interface ItemFrame extends EntityBase {
	id: ItemFrameId,
	TileX?: int,
	TileY?: int,
	TileZ?: int,
	Facing?: Facing6
	Item?: InventoryItem,
	ItemDropChance?: float,
	ItemRotation?: byte[]
}
