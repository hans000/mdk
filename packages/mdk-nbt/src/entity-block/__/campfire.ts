import { BlockEntityBase, int } from "@/shared";
import { Facing4State } from "@shared/state/facing";
import { WaterloggedState } from "@shared/state/waterlogged";

export type CampfireId = 'campfire' | 'soul_campfire'

export interface CampfireState extends WaterloggedState, Facing4State {
    lit: boolean
    /** 营火下方是否有干草块，默认false */
    signal_fire: boolean
}

export interface Campfire extends BlockEntityBase {
    /** 每个物品已被烹饪多长时间，第一个索引为槽位0 */
    CookingTimes: int[]
    /** 每个物品需要被烹饪的时间，第一个索引为槽位0 */
    CookingTotalTimes: int[]
}