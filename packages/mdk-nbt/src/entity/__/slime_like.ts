import { MobBase } from "./shared";
import { int } from "@shared/__/numberic";

export interface Slimelike extends Omit<MobBase, 'id'> {
	id: SlimeLikeId,
	Size?: int,
	wasOnGround?: boolean,
}

export type SlimeLikeId = 'slime' | 'magma_cube'