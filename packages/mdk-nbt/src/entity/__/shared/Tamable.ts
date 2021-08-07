import { UUID } from "@shared/__";
import { Breedable } from "./Breedable";

/**
 * 可驯服生物nbt标签
 */
export declare interface Tamable extends Breedable {
	/** 记录驯服这匹马的玩家UUID。 */
	OwnerUUID?: UUID
	/** 是否坐着 */
	Sitting?: boolean
}