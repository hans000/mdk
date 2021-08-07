import { BlockEntityBase } from "@shared/__/BlockEntity";
import { Int0_15 } from "@shared/constants/value";

export type DaylightDetectorId = 'daylight_detector'

export interface DaylightDetectorState {
    /** 模式 */
    inverted: boolean
    /** 红石信号强度 */
    power: Int0_15
}

export interface DaylightDetector extends BlockEntityBase {
    
}