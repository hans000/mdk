import { BlockEntityBase } from "@shared/__/BlockEntity";
import { Facing16State, Facing4State } from "@shared/state/facing";
import { WaterloggedState } from "@shared/state/waterlogged";

export type SignId = WallSignId | StandingSignId

export type WallSignId =
    | 'wall_sign'               /** 墙上的橡木告示牌 */
    | 'spruce_wall_sign'        /** 墙上的云杉木告示牌 */
    | 'birch_wall_sign'         /** 墙上的白桦木告示牌 */
    | 'jungle_wall_sign'        /** 墙上的丛林木告示牌 */
    | 'acacia_wall_sign'        /** 墙上的金合欢木告示牌 */
    | 'darkoak_wall_sign'       /** 墙上的深色橡木告示牌 */
    | 'crimson_wall_sign'       /** 墙上的绯红木告示牌 */
    | 'warped_wall_sign'        /** 墙上的诡异木告示牌 */
    
export type StandingSignId =
    | 'standing_sign'           /** 站立的橡木告示牌 */
    | 'spruce_standing_sign'    /** 站立的云杉木告示牌 */
    | 'birch_standing_sign'     /** 站立的白桦木告示牌 */
    | 'jungle_standing_sign'    /** 站立的丛林木告示牌 */
    | 'acacia_standing_sign'    /** 站立的金合欢木告示牌 */
    | 'darkoak_standing_sign'   /** 站立的深色橡木告示牌 */
    | 'crimson_standing_sign'   /** 站立的绯红木告示牌 */
    | 'warped_standing_sign'    /** 站立的诡异木告示牌 */

export type SignState = StandingSignState | WallSignState

export interface StandingSignState extends WaterloggedState, Facing16State {
    /** 此告示牌的文本是否发光，默认false */
    lit: boolean
}

export interface WallSignState extends Facing4State, WaterloggedState {
    /** 此告示牌的文本是否发光，默认false */
    lit: boolean
}

export interface Sign extends BlockEntityBase {
    Text1: string
    Text2: string
    Text3: string
    Text4: string
}