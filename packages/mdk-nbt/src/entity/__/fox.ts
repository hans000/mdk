import { Breedable } from "./shared";
import { long } from "@shared/index";

export interface Fox extends Omit<Breedable, 'id'> {
	id: FoxId,
	TrustedUUIDs?: TrustedUUID[],
	Sleeping?: boolean,
	Type?: FoxType,
	Sitting?: boolean,
	Crouching?: boolean
}

export interface TrustedUUID {
	L: long,
	M: long
}

export enum FoxType {
	Red = "red",
	Snow = "snow"
}

export type FoxId = 'fox'