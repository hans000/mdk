import { RaiderBase } from "./shared";
import { int } from "@shared/__/numberic";

export interface Spellcaster extends Omit<RaiderBase, 'id'> {
	id: SpellcasterId,
	SpellTicks?: int,
}

export type SpellcasterId = 'evoker' | 'illusioner'