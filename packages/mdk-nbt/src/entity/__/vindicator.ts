import { RaiderBase } from "./shared";

export interface Vindicator extends Omit<RaiderBase, 'id'> {
	id: VindicatorId,
	Johnny?: boolean,
}

export type VindicatorId = 'vindicator'