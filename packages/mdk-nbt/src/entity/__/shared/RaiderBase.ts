import { int } from "@shared/__";
import { MobBase } from "./MobBase";

/**
 * 袭击生物nbt标签
 */
export interface RaiderBase extends Partial<Omit<MobBase, 'id'>> {
    /** 生物id */
	id: RaiderBaseId,
	HasRaidGoal?: boolean,
	Patrolling?: boolean,
	/** 当前生物为巡逻队领袖时，为true。 */
	PatrolLeader?: boolean,
	/** 巡逻队正在前往的坐标。 */
	PatrolTarget?: PatrolTarget,
	/** 当前生物所归属的袭击队的数字ID。 */
	RaidId?: int,
	/** 当前生物所参与的袭击轮次。 */
	Wave?: int
}

/** 巡逻队正在前往的坐标。 */
export interface PatrolTarget {
	X: int,
	Y: int,
	Z: int,
}

/** 巡逻队id */
export type RaiderBaseId = 'witch'