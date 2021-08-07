import { int, BlockEntityBase } from "@/shared";
import { ItemColor } from "@shared/constants/color";
import { Facing16State, Facing4State } from "@shared/state/facing";
import { WaterloggedState } from "@shared/state/waterlogged";

export type BannerId = StandBannerId | WallBannerId
export type StandBannerId = `${ItemColor}_banner`
export type WallBannerId = `${ItemColor}_wall_banner`

export type BannerState = StandBannerState | WallBannerState
export interface StandBannerState extends WaterloggedState, Facing16State {}
export interface WallBannerState extends WaterloggedState, Facing4State {}

export interface Banner extends BlockEntityBase {
    /** 自定义名称 */
    CustomName: string
    /** 旗帜上所有的图案 */
    Patterns: BannerPattern[]
}

export interface BannerPattern {
    /** 图案的颜色 */
    Color: int
    /** 图案的类型 */
    Pattern: string
}