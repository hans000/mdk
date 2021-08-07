import { BooleanMemory, CooldownMemory, TickMemory } from "@shared/index"
import { Breedable } from "./shared"

export type AxolotlId = 'axolotl'

export interface Axolotl extends Breedable {
	Brain: AxolotlBrain,
	Variant: AxolotlVariant,
	FromBucket: boolean
}

export enum AxolotlVariant {
	Lucy = 0,
	Wild = 1,
	Gold = 2,
	Cyan = 3,
	Blue = 4
}

export interface AxolotlBrain {
	memories: Memories
}

export interface Memories {
	"minecraft:has_hunting_cooldown": CooldownMemory,
	"minecraft:is_tempted": BooleanMemory,
	"minecraft:play_dead_ticks": TickMemory,
	"minecraft:temptation_cooldown_ticks": TickMemory
}
