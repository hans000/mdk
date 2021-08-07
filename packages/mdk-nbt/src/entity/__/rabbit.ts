import { Breedable } from "./shared";
import { int } from "@shared/__/numberic";

export interface Rabbit extends Omit<Breedable, 'id'> {
	id: RabbitId,
	RabbitType?: RabbitKind,
	MoreCarrotTicks?: int
}

export enum RabbitKind {
	Brown = 0,
	White = 1,
	Black = 2,
	BlackAndWhite = 3,
	Gold = 4,
	SaltAndPepper = 5,
	Killer = 99
}

export type RabbitId = 'rabbit'