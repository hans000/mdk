import { BannerColorKind } from "@shared/constants/color";
import { Tamable } from "./shared";

export interface Wolf extends Omit<Tamable, 'id'> {
	id: WolfId,
	Angry?: boolean,
	CollarColor?: BannerColorKind,
}

export type WolfId = 'wolf'