import { EntityBase } from "./shared";
import { short } from "@shared/__/numberic";

export interface Tnt extends EntityBase {
	id: TntId,
	Fuse?: short
}

export type TntId = 'tnt'