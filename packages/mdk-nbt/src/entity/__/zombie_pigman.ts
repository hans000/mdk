import { MobBase } from "./shared";
import { short } from "@shared/__/numberic";

export interface ZombiePigman extends Omit<MobBase, 'id'> {
	id: ZombiePigmanId,
	IsBaby?: boolean,
	Anger?: short,
	HurtBy?: string
}

export type ZombiePigmanId = 'zombie_pigman'