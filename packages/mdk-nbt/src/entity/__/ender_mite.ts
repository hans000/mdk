import { MobBase } from "./shared";
import { int } from "@shared/__/numberic";

/** 末影螨id */
export type EnderMiteId = 'endermite'
/**
 * 末影螨nbt标签
 */
export interface Endermite extends Omit<MobBase, 'id'> {
	/** 实体id */
	id: EnderMiteId,
	/**  末影螨存在的时间(刻)。当此值达到2400时末影螨会自动消失。 */
	Lifetime?: int,
	/** true代表末影人将会攻击末影螨。 */
	PlayerSpawned?: boolean,
}
