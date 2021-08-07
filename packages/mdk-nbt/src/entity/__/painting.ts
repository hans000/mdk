import { EntityBase } from "./shared";
import { int } from "@shared/__/numberic";

export interface Painting extends EntityBase {
	id: PaintingId,
	TileX?: int,
	TileY?: int,
	TileZ?: int,
	Facing?: Facing4Kind,
	Motive?: string
}

export enum Facing4Kind {
	South = 0,
	West = 1,
	North = 2,
	East = 3
}

export type PaintingId = 'painting'