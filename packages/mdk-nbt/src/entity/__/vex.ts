import { MobBase } from "./shared";
import { int } from "@shared/__/numberic";

export interface Vex extends Omit<MobBase, 'id'> {
	id: VexId,
	BoundX?: int,
	BoundY?: int,
	BoundZ?: int,
	LifeTicks?: int
}

export type VexId = 'vex'