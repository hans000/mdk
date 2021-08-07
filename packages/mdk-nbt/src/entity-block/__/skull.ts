import { BlockEntityBase } from "@shared/__/BlockEntity";
import { long } from "@shared/__/numberic";
import { Facing16State, Facing4State } from "@shared/state/facing";
import { UUID } from "@shared/__/uuid";

export type WallSkullId = 
    | 'skeleton_wall_skull'
    | 'wither_skeleton_wall_skull'
    | 'zombie_wall_head'
    | 'player_wall_head'
    | 'creeper_wall_head'
    | 'dragon_wall_head'

export type SkullId = 
    | 'skeleton_skull'
    | 'wither_skeleton_skull'
    | 'zombie_head'
    | 'player_head'
    | 'creeper_head'
    | 'dragon_head'


export interface WallSkullState extends Facing4State {}

export interface SkullState extends Facing16State {}

export interface Skull extends BlockEntityBase {
    SkullOwner: SkullOwner
}

export interface SkullOwner {
    Id?: UUID
    Name: string
    Properties: SkillProperties
}

export interface SkillProperties {
    textures: SkullTexture[]
}

export interface SkullTexture {
    Signature: string
    Value: SkullValueString
}

type SkullValueString = string

export interface SkullValue {
    timestamp?: long
    /** 无连字符的玩家UUID */
    profileId?: string
    /** 玩家名称 */
    profileName?: string
    isPublic?: boolean
    textures: {
        SKIN: {
            /** textures.minecraft.net里玩家皮肤的URL */
            url: string
        }
        CAPE: {
            /** 玩家披风的URL */
            url: string
        }
    }
}