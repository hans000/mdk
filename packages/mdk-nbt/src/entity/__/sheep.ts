import { BannerColorKind } from "@shared/index";
import { Breedable } from "./shared";

export interface Sheep extends Omit<Breedable, 'id'> {
	id: SheepId,
	Sheared?: boolean,
	Color?: BannerColorKind
}

export type SheepId = 'sheep'