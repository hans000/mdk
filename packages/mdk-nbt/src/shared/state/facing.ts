import { Facing16, Facing4, Facing6 } from "@shared/__/face";

export interface Facing4State {
    /** 方块朝向的方向，默认north */
    facing: Facing4
}

export interface Facing6State {
    /** 方块朝向的方向，默认north */
    facing: Facing6
}

export interface Facing16State {
    /** 方块朝向的方向，默认0 */
    rotation: Facing16
}