import { BlockEntityState } from "@/entity-block";
import { MobBase } from "./shared";

/** 末影人id */
export type EnderManId = 'enderman'

/**
 * 末影人nbt标签
 */
export interface Enderman extends Omit<MobBase, 'id'> {
	/** 实体id */
	id: EnderManId,
	/** 末影人拿着的方块 */
	carriedBlockState?: BlockEntityState,
}
