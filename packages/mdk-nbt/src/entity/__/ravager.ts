import { RaiderBase } from "./shared";
import { int } from "@shared/__/numberic";

export interface Ravager extends Omit<RaiderBase, 'id'> {
	id: RavagerId,
	AttackTick?: int,
	RoarTick?: int,
	StunTick?: int,
}

export type RavagerId = 'ravager'