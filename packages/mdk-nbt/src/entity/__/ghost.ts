import { MobBase } from "./shared";
import { int } from "@shared/__/numberic";

export type GhostId = 'ghast'

export interface Ghast extends Omit<MobBase, 'id'> {
	id: GhostId,
	ExplosionPower?: int[],
}