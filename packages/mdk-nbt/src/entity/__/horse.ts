import { InventoryItem, SlottedItem, int } from "@shared/index"
import { Breedable } from "./shared"

/**
 * 马类生物nbt标签
 */
 export interface HorseBase extends Omit<Breedable, 'id'> {
    /** 生物id */
	id: HorseBaseId,
	/** 繁殖后仍然是0。如果值为1，使其靠近此值同为1的马。 */
	Bred?: boolean,
	/** 如果值为1，马将处于放牧状态。 */
	EatingHaystack?: boolean,
	/** 如果值为1，马将处于驯服状态。 */
	Tame?: boolean,
	/** 范围从 0 到 100 - 喂马会提高这项数值。更高的值会使马更容易驯服。 */
	Temper?: int,
	/** 马所穿着的马铠物品。 */
	ArmorItem?: InventoryItem,
	/** 马所穿着的鞍物品。  */
	SaddleItem?: InventoryItem
}

export type HorseBaseId = 'zombie_horse'

export type HorseId = 'horse'

export interface Horse extends Omit<HorseBase, 'id'> {
	/** 生物id */
	id: HorseId,
	/** 马的变种。决定颜色。 */
	Variant: int,
}


/**
 * 可放置箱子生物nbt标签
 */
 export interface ChestedHorse extends Omit<HorseBase, 'id'> {
	/** 生物id */
	id: ChestedHorseId,
	/** 如果值为1，生物身上会有箱子。 */
	ChestedHorse?: boolean,
	/** 箱子物品标签 */
	Items?: SlottedItem[]
}

/** 可放置箱子生物id */
export type ChestedHorseId = 'donkey' | 'mule'


export type SkeletonHorseId = 'skeleton_horse'
export interface SkeletonHorse extends Omit<HorseBase, 'id'> {
	id: SkeletonHorseId,
	SkeletonTrap?: boolean,
	SkeletonTrapTime?: int
}