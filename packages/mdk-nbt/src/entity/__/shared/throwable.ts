import { InventoryItem, byte, long } from "@shared/index";
import { ProjectileBase } from "./ProjectileBase";

export interface Throwable extends ProjectileBase {
	shake?: byte,
	owner?: ThrowableOwner
}

export interface BasicThrowable extends Omit<Throwable, 'id'> {
	id: BasicThrowableId,
	Item?: InventoryItem
}

export interface PotionThrowable extends Throwable {
	Potion?: InventoryItem
}

export interface ThrowableOwner {
	M: long,
	L: long
}

export type BasicThrowableId = 
	| 'egg' 
	| 'ender_pearl' 
	| 'experience_bottle' 
	| 'snowball'