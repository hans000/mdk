import { BlockEntityBase } from "@shared/__/BlockEntity";
import { Facing4State } from "@shared/state/facing";

export type BellId = 'bell'

export interface BellState extends Facing4State {
    /** 附着的方向 */
    attachment: 'ceiling' | 'double_wall' | 'floor' | 'single_wall'
    /** 是否激活 */
    powered: boolean
}

export interface Bell extends BlockEntityBase {}