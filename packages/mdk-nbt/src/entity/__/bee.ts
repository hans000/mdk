import { Breedable } from "./shared";
import { int } from "@shared/__/numberic";

/**
 * 蜜蜂nbt标签
 */
export interface Bee extends Omit<Breedable, 'id'> {
	/** 生物id */
	id: BeeId,
	/** 蜂箱的坐标。 */
	HivePos?: HivePos,
	/** 储存其盘旋的花的坐标。 */
	FlowerPos?: FlowerPos,
	/** 决定其是否携带花粉。 */
	HasNectar?: boolean,
	/** 决定其是否蜇过玩家或生物。 */
	HasStung?: boolean,
	/** 其最后一次授粉后经过的刻数。 */
	TicksSincePollination?: int,
	/** 离其能再次进入蜂箱的刻数。当该蜜蜂被玩家激怒并从蜂箱中释放出来，但又被营火烟熏到时使用。 */
	CannotEnterHiveTicks?: int,
	/** 其最后一次授粉前促进了多少作物的生长。用来限制蜜蜂促进生长作物的次数。 */
	CropsGrownSincePollination?: int,
	/** 离其不再愤怒时的刻数。为0时蜜蜂不愤怒。 */
	Anger?: int,
	/** 一个空的字符串，或记录攻击该蜜蜂的玩家的UUID字符串。 */
	HurtBy?: string
}

/** 蜂箱坐标nbt标签 */
export interface HivePos {
	X: int,
	Y: int,
	Z: int
}

/** 蜜蜂盘旋花坐标nbt标签 */
export interface FlowerPos {
	X: int,
	Y: int,
	Z: int
}

/** 蜜蜂id */
export type BeeId = 'bee'