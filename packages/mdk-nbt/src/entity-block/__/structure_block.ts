import { BlockEntityBase } from "@shared/__/BlockEntity";
import { int } from "@shared/__/numberic";

export type StructureBlockId = 'structure_block'

export type StructureMode =
    | 'save'
    | 'load'
    | 'corner'
    | 'data'

export type StructureMirror =
    | 'NONE'
    | 'LEFT_RIGHT'
    | 'FRONT_BACK'

export type StructureRotation =
    | 'NONE'
    | 'CLOCKWISE_90'
    | 'CLOCKWISE_180'
    | 'COUNTERCLOCKWISE_90'

export interface StructureBlockState {
    /** 模式，默认data */
    mode: StructureMode
}

export interface StructureBlock extends BlockEntityBase {
    name: string
    author: string
    metadata: string
    posX: int
    posY: int
    posZ: int
    sizeX: int
    sizeY: int
    sizeZ: int
    rotation: StructureRotation
    mirror: StructureMirror
    mode: StructureMode
}