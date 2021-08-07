import { ItemBase } from "./shared";

export interface PlayerHeadItem extends Partial<ItemBase> {
	id: PlayerHeadId,
	SkullOwner?: SkullOwner | string
}

export interface SkullOwner {
	Id: string,
	Name: string,
	Properties: SkullOwnerProperties,
}

export interface SkullOwnerProperties {
	textures: PlayerHeadItemTexture[],
}

export interface PlayerHeadItemTexture {
	Signature: string,
	Value: string,
}

export type PlayerHeadId = 'player_head'