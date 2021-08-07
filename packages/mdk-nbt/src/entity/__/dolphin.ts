import { MobBase } from "./shared";
import { int } from "@shared/__/numberic";

/**
 * 海豚nbt标签
 */
export interface Dolphin extends Partial<Omit<MobBase, 'id'>> {
	/** 生物id */
	id: DolphinId,
	/** 海豚将会带你去的宝藏的X坐标，当CanFindTreasure为false时为0。 */
	TreasurePosX?: int,
	/** 海豚将会带你去的宝藏的Y坐标，当CanFindTreasure为false时为0。 */
	TreasurePosY?: int,
	/** 海豚将会带你去的宝藏的Z坐标，当CanFindTreasure为false时为0。 */
	TreasurePosZ?: int,
	/** 海豚是否从玩家得到鱼。 */
	GotFish?: boolean,
	/** 海豚是否会带你去埋藏的宝藏。 */
	CanFindTreasure?: boolean
}

/** 海豚id */
export type DolphinId = 'dolphin'