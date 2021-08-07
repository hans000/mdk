import { BlockEntityState } from "@/entity-block";
import { int } from "@shared/__";
import { EntityBase } from "./EntityBase";

/**
 * 发射物体nbt标签
 */
export interface ProjectileBase extends EntityBase {
	xTile?: int,
	yTile?: int,
	zTile?: int,
	inBlockState?: BlockEntityState
}