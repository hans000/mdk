import { Breedable } from "./shared";
import { int } from "@shared/__/numberic";

/**
 * 鸡nbt标签
 */
export interface Chicken extends Omit<Breedable, 'id'> {
    /** 生物id */
    id: ChickenId,
    /** 是否为鸡骑士 */
    IsChickenJockey?: boolean,
    /** 距离鸡下一次下蛋的时间（刻）。鸡会在该值为0的时候下蛋，然后该值会被随机重置到6000到12000之间。 */
    EggLayTime?: int,
}

/** 鸡id */
export type ChickenId = 'chicken'