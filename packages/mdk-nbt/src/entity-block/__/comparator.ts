import { BlockEntityBase } from "@shared/__/BlockEntity";
import { int } from "@shared/__/numberic";
import { Facing4State } from "@shared/state/facing";

export type ComparatorId = 'comparator'

export interface ComparatorState extends Facing4State {
    /** 模式，默认compare */
    mode: 'compare' | 'substract'
    /** 是否被激活 */
    powered: boolean
}

export interface Comparator extends BlockEntityBase {
    /** 模拟信号输出的强度 */
    OutputSignal: int
}