import { int, InventoryItem, UUID } from "@shared/index";
import { MobBase } from "./shared";


export type PiglinId = 'piglin'
export interface Piglin extends Omit<MobBase, 'id'> {
	id: PiglinId,
	IsBaby?: boolean,
	Inventory?: InventoryItem[],
}

export type ZombifiedPiglinId = 'zombified_piglin'
export interface ZombifiedPiglin extends MobBase {
	AngerTime: int,
	AngryAt: UUID,
	IsBaby: boolean,
	HurtBy: UUID
}
