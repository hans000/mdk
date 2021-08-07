import { int, long } from "@/index";

export interface BooleanMemory {
	value: boolean
}

export interface TickMemory {
	value: int
}

export interface CooldownMemory {
	value: boolean,
	ttl: long
}