import { UUID } from "@shared/index";
import { Tamable } from "./shared";

export interface Parrot extends Omit<Tamable, 'id'> {
	id: ParrotId,
	OwnerUUID?: UUID,
	Sitting?: boolean,
	Variant?: ParrotVariantKind
}

export enum ParrotVariantKind {
	Red = 0,
	Blue = 1,
	Green = 2,
	Cyan = 3,
	Gray = 4
}

export type ParrotId = 'parrot'