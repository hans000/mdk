import { MobBase } from "./shared";

/**
 * 蝙蝠nbt标签
 */
export interface Bat extends Omit<MobBase, 'id'> {
	/** 生物id */
	id: BatId,
	/** 当倒挂在方块时为1，当飞行时则为0。 */
	BatFlags?: boolean,
}

/** 蝙蝠id */
export type BatId = 'bat'