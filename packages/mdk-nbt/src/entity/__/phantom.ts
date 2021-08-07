import { MobBase } from "./shared";
import { int } from "@shared/__/numberic";

export interface Phantom extends Omit<MobBase, 'id'> {
	id: PhantomId,
	AX?: int,
	AY?: int,
	AZ?: int,
	Size?: int,
}

export type PhantomId = 'phantom'