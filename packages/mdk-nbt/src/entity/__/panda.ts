import { Breedable } from "./shared"

export interface Panda extends Omit<Breedable, 'id'> {
	id: PandaId,
	MainGene?: GeneType,
	HiddenGene?: GeneType
}
 
export type GeneType =
	| "normal"
	| "lazy"
	| "worried"
	| "playful"
	| "brown"
	| "weak"
	| "aggressive"
 
export type PandaId = 'panda'