import { FireworkRocketId } from "@/entity/__";
import { ItemBase } from "./shared";

export interface FireworkRocketItem extends Partial<ItemBase> {
	id: FireworkRocketId,
	Fireworks?: Partial<Fireworks>
}

export interface FireworkStar extends Partial<ItemBase> {
	id: FireworkStarId,
	Explosion?: Partial<Explosion>
}

export interface Fireworks {
	Flight: number,
	Explosions: Explosion[]
}

export interface Explosion {
	Flicker: boolean,
	Trail: boolean,
	Type: FireworkKind,
	Colors: number[],
	FadeColors: number[]
}

export enum FireworkKind {
	SmallBall = 0,
	LargeBall = 1,
	Star = 2,
	Creeper = 3,
	Burst = 4
}

export type FireworkStarId = 'firework_star'