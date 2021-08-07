import { EntityBase } from "./shared";
import { short, byte } from "@shared/__/numberic";

export interface XpOrb extends EntityBase {
	id: XpOrbId,
	Age?: short,
	Health?: byte,
	Value?: short
}

export type XpOrbId = 'experience_orb'