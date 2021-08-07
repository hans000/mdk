import { EntityBase } from "./shared"

export type BoatId = 'boat'
export interface Boat extends EntityBase {
	Type: BoatType
}

export type BoatType =
	| "oak"
	| "spruce"
	| "birch"
	| "jungle"
	| "acacia"
	| "dark_oa"
