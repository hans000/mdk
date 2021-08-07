import { EntityBase } from "./shared";
import { int } from "@shared/__/numberic";

/**
 * 末影水晶nbt标签
 */
export interface EndCrystal extends EntityBase {
	/** 实体id */
	id: EndCrystalId,
	/** 如果值为1，末影水晶将会显示基岩底座。 */
	ShowBottom?: boolean,
	/** 治愈激光定位到的位置 */
	BeamTarget?: BeamTarget,
}

/** 治愈激光位置nbt标签 */
 export interface BeamTarget {
	X: int,
	Y: int,
	Z: int,
}

/** 末影水晶id */
export type EndCrystalId = 'end_crystal'