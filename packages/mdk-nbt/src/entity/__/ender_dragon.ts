import { MobBase } from "./shared";

/** 末影龙 */
export type EnderDragonId = 'ender_dragon'

/**
 * 末影龙nbt标签
 */
export interface EnderDragon extends Omit<MobBase, 'id'> {
	id: EnderDragonId,
	/** 一个控制末影龙行动的数字 */
    DragonPhase?: DragonPhaseKind
}

/** 末影龙行动枚举值 */
export enum DragonPhaseKind {
	/** 绕圈（徘徊） */
	Circling = 0,
	/** 扫射（准备发射火球） */
	Strafing = 1,
	/** 飞至传送门并降落（降落行动的一部分） */
	FlyingToPortal = 2,
	/** 停在传送门上（降落行动的一部分） */
	Landing = 3,
	/** 从传送门起飞（起飞行动的一部分） */
	TakingOff = 4,
	/** 降落时，吐出龙息 */
	BreathAttack = 5,
	/** 降落时，面向玩家并进行龙息攻击 */
	Landed = 6,
	/** 降落时，在进行龙息攻击前咆啸 */
	Roar = 7,
	/** 冲向玩家（俯冲攻击） */
	Charging = 8,
	/** 飞至传送门并死亡 */
	Dying = 9,
	/** 在无AI的状态下悬停 */
	Hovering = 10,
}
