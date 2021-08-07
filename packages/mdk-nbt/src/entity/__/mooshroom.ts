import { EffectIntKind } from "@shared/constants/effect";
import { Breedable } from "./shared";
import { int } from "@shared/__/numberic";

export interface Mooshroom extends Omit<Breedable, 'id'> {
	id: MooshroomId,
	Type?: MooshroomType,
	EffectId?: EffectIntKind,
	EffectDuration?: int
}

export enum MooshroomType {
	Red = "red",
	Brown = "brown"
}

export type MooshroomId = 'mooshroom'