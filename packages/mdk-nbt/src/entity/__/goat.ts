import { BooleanMemory, TickMemory } from "@shared/index"
import { Breedable } from "./shared"

export type GoatId = 'goat'
export interface Goat extends Breedable {
	Brain: GoatBrain
	IsScreamingGoat: boolean
}

export interface GoatBrain {
	memories: GoatMemories
}

export interface GoatMemories {
	"minecraft:is_tempted": BooleanMemory,
	"minecraft:long_jump_cooling_down": TickMemory,
	"minecraft:ram_cooldown_ticks": TickMemory,
	"minecraft:temptation_cooldown_ticks": TickMemory
}