import { BlockEntityBase } from "@shared/__/BlockEntity";
import { EffectInt } from "@shared/constants/effect";

export type BeaconId = 'beacon'

export interface Beacon extends BlockEntityBase {
    /** 容器上锁 */
    Lock?: string
    /** 表示金字塔可用等级的一个数值 */
    Levels?: 1 | 2 | 3 | 4
    /** 选定的主效果 */
    Primary?: EffectInt
    /** 选定的辅助效果 */
    Secondary?: EffectInt
}