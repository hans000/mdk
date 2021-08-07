import { Breedable } from "./shared";

export interface Pig extends Omit<Breedable, 'id'> {
	id: PigId,
	Saddle?: boolean,
}

export type PigId = 'pig'