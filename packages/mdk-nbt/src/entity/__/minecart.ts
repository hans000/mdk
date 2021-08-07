import { BlockEntityState } from "@/entity-block";
import { SpawnerPotential } from "@/entity-block/__";
import { double, int, long, short, SlottedItem } from "@shared/index";
import { AnyEntity, EntityBase } from "./shared";

export type MineCartId =
	| MinecartBaseId
	| ChestMinecartBaseId
	| CommandMinecartId
	| FurnaceMinecartId
	| HopperMinecartId
	| SpawnerMinecartId
	| TntMinecartId

export type MinecartBaseId = 'minecart'
export interface MinecartBase extends EntityBase {
    CustomDisplayTile: boolean
    DisplayState: BlockEntityState
    DisplayOffset: int
}


export type ChestMinecartBaseId = 'chest_minecart'
export interface ChestMinecart extends MinecartBase {
    Loottable: string
    LootTableSeed: long
    Items: SlottedItem[]
}


export type CommandMinecartId = 'command_block_minecart'
export interface CommandMinecart extends MinecartBase {
	Command: string
	SuccessCount: int
	LastOutput: string
	TrackOutput: boolean
}


export type FurnaceMinecartId = 'furnace_minecart'
export interface FurnaceMinecart extends MinecartBase {
	PushX: double,
	PushZ: double,
	Fuel: short
}


export type HopperMinecartId = 'hopper_minecart'
export interface HopperMinecart extends MinecartBase {
	LootTable: string
	LootTableSeed: long
	Items: SlottedItem[]
	TransferCooldown: int
	Enabled: boolean
}


export type SpawnerMinecartId = 'spawner_minecart'
export interface SpawnerMinecart extends MinecartBase {
	SpawnPotentials: SpawnerPotential[],
	SpawnData: AnyEntity,
	SpawnCount: short,
	SpawnRange: short,
	Delay: short,
	MinSpawnDelay: short,
	MaxSpawnDelay: short,
	MaxNearbyEntities: short,
	RequiredPlayerRange: short
}


export type TntMinecartId = 'tnt_minecart'
export interface TntMinecart extends MinecartBase {
	TNTFuse: int
}
