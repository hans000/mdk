import { InventoryItem } from "@shared/index";
import { EntityBase } from "./shared";

export interface EyeOfEnder extends EntityBase {
	id: EyeOfEnderId,
	Item?: InventoryItem
}

export type EyeOfEnderId = 'eye_of_ender'