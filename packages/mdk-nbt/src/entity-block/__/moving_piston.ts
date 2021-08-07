import { BlockEntityBase } from './../../shared/__/BlockEntity';
import { Facing6 } from './../../shared/__/face';
import { BlockEntityState } from "@/index"
import { float } from "@shared/index"

export type MovingPistonId = 'moving_piston'

export interface MovingPiston extends BlockEntityBase {
	blockState: BlockEntityState
	facing: Facing6
	progress: float
	extending: boolean
	source: boolean
}