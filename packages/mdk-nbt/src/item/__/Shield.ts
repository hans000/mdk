import { BannerPatternId } from "@shared/constants/banner_pattern";
import { BannerColorKind } from "@shared/constants/color";
import { ItemBase } from "./shared";

export interface Shield extends Partial<ItemBase> {
	id: ShieldId,
	BlockEntityTag?: Tag,
}

export interface Tag {
	Patterns: Pattern[]
}

export interface Pattern {
	Color: BannerColorKind
	Pattern: BannerPatternId
}

export type ShieldId = 'shield'