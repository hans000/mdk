import { EntityBase } from "./shared";
import { int, long } from "@shared/__/numberic";

export type EvokerFangsId = 'evoker_fangs'

export interface EvokerFangs extends EntityBase {
	id: EvokerFangsId,
	Warmup?: int,
	Owner?: EvokerFangsOwner
}

export interface EvokerFangsOwner {
	OwnerUUIDMost: long,
	OwnerUUIDLeast: long
}