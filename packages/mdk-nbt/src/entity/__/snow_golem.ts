import { MobBase } from "./shared";

export interface SnowGolem extends Omit<MobBase, 'id'> {
	id: SnowGolemId,
	Pumpkin?: boolean,
}

export type SnowGolemId = 'snow_golem'