import { MobBase } from "./shared";

export interface IronGolem extends Omit<MobBase, 'id'> {
	id: IronGolemId,
	PlayerCreated?: boolean
}

export type IronGolemId = 'iron_golem'