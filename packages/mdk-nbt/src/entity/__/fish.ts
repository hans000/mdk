import { MobBase } from "./shared"
import { int } from "@shared/__/numberic"

export interface Fish extends Omit<MobBase, 'id'> {
	id: FishId | PufferfishId | TropicalFishId,
	FromBucket?: boolean
}

export interface Pufferfish extends Fish {
	id: PufferfishId,
	PuffState?: PuffState
}

export interface TropicalFish extends Fish {
	id: TropicalFishId,
	Variant?: int
}

export enum PuffState {
	Deflated = 0,
	HalfPuffed = 1,
	Puffed = 2
}

export type FishId = 'cod' | 'salmon'
export type PufferfishId = 'pufferfish'
export type TropicalFishId = 'tropical_fish'