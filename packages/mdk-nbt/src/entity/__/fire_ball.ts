import { InventoryItem, double, int } from "@shared/index"
import { EntityBase } from "./shared"

export interface FireballBase extends EntityBase {
	id: FireballBaseId | FireballId | LargeFireballId,
	direction?: double[],
	life?: int,
	power?: double[]
}

export interface Fireball extends FireballBase {
	id: FireballId | LargeFireballId,
	Item?: InventoryItem
}

export interface LargeFireball extends Fireball {
	id: LargeFireballId,
	ExplosionPower?: int
}

export type FireballBaseId = 'dragon_fireball' | 'wither_skull'
export type FireballId = 'small_fireball'
export type LargeFireballId = 'fireball'