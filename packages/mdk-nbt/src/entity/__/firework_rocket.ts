import { InventoryItem, int } from "@shared/index";
import { EntityBase } from "./shared";

export interface FireworkRocket extends EntityBase {
	id: FireworkRocketId,
	Life?: int,
	LifeTime?: int,
	ShotAtAngle?: boolean,
	FireworksItem?: InventoryItem
}

export type FireworkRocketId = 'firework_rocket'