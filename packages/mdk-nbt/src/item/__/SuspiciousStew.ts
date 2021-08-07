import { EffectId, EffectIntKind } from "@shared/constants/effect";
import { ItemBase } from "./shared";
import { int } from "@shared/__/numberic";

export interface SuspiciousStew extends Partial<ItemBase> {
	id: SuspiciousStewId,
	Effects?: EffectId[]
}

export interface SuspiciousStewEffect {
	EffectId: EffectIntKind,
	EffectDuration: int
}

export type SuspiciousStewId = 'suspicious_stew'