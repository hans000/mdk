import { int } from "@shared/__/numberic";
import { Facing4State } from "@shared/state/facing";

type HoneyLevel = 0 | 1 | 2 | 3 | 4 | 5

export type BeeBlockId =
    | 'bee_nest'    /** 蜂巢 */
    | 'beehive'     /** 蜂箱 */

export interface BeeBlockState extends Facing4State {
    honey_level: HoneyLevel
}

/** 蜂巢和蜂箱方块实体数据 */
export interface BeeBlock {
    FlowerPos: {
        /** 花的X坐标 */
        X: int
        /** 花的Y坐标 */
        Y: int
        /** 花的Z坐标 */
        Z: int
    }
    Bees: BeeEntity[]
}

export interface BeeEntity {
    /** 该实体会在巢内滞留的最短时间（刻） */
    MinOccupationTicks: int
    /** 该实体在巢内已滞留的时间（刻） */
    TicksInHive: int
    /** 巢内该实体的NBT数据 */
    EntityData: any
}