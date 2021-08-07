import { ItemColor } from "@shared/constants/color";
import { Facing4State } from "@shared/state/facing";

export type BedId = `${ItemColor}_bed`

export interface BedState extends Facing4State {
    /** 是否使用这张床 */
    occupied: boolean
    /** 在当前方块中是床的哪一个部分 */
    part: 'foot' | 'head'
}