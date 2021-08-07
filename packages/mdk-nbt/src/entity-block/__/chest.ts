import { LootContainer } from "@shared/__/Container";
import { Facing4State } from "@shared/state/facing";
import { WaterloggedState } from "@shared/state/waterlogged";

export type ChestId =
    | 'trapped_chest'
    | 'chest'

export interface ChestState extends Facing4State, WaterloggedState {
    /** 箱子连接的方向 */
    type: 'single' | 'left' | 'right'
}

export interface Chest extends LootContainer {}
