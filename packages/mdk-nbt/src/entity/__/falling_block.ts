import { BlockEntityState } from "@/entity-block";
import { EntityBase } from "./shared";
import { int, float } from "@shared/__/numberic";

export interface FallingBlock extends EntityBase {
	id: FallingBlockId,
	TileEntityData?: string,
	BlockState?: BlockEntityState,
	Time?: int,
	DropItem?: boolean,
	HurtEntities?: boolean,
	FallHurtMax?: int,
	FallHurtAmount?: float
}

export type FallingBlockId = 'falling_block'