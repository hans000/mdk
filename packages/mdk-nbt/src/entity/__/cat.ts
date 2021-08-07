import { BannerColorKind } from "@shared/index";
import { Tamable } from "./shared";

/**
 * 猫nbt标签
 */
export interface Cat extends Omit<Tamable, 'id'> {
	/** 生物id */
	id: CatId,
	/** 猫的皮肤的ID。无效的ID都会使猫不可见。 */
	CatType?: CatKind,
	/** 猫的项圈颜色。未驯服的流浪猫也有此字段（但是不渲染）。默认值为14。 */
	CollarColor?: BannerColorKind,
}

/** 猫皮肤类型枚举值 */
export enum CatKind {
	Invisible = -1,
	Tabby = 0,
	Tuxedo = 1,
	Red = 2,
	Siamese = 3,
	Shorthair = 4,
	Calico = 5,
	Persian = 6,
	Ragdoll = 7,
	White = 8,
	Jellie = 9,
	Black = 10
}

/** 猫id */
export type CatId = 'cat'