import { ItemBase } from "./shared";
import { int } from "@shared/__/numberic";

export interface FishBucket extends Partial<ItemBase> {
	id: FishBucketId,
	BucketVariantTag?: int
}

export type FishBucketId =
	| 'salmon_bucket'
	| 'pufferfish_bucket'
	| 'cod_bucket'
	| 'tropical_fish_bucket'