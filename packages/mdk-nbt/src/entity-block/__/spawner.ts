import { BlockEntityBase } from "@shared/__/BlockEntity";
import { int, short } from "@shared/__/numberic";

export type SpawnerId = 'spawner'

export interface Spawner extends BlockEntityBase, SpawnerBlock {}

export interface SpawnerBlock {
    Delay?: short
    MaxNearbyEntities: short
    MaxSpawnDelay: short
    MinSpawnDelay: short
    RequiredPlayerRange: short
    SpawnCount: short
    SpawnData: any // TODO https://minecraft.fandom.com/zh/wiki/%E5%88%B7%E6%80%AA%E7%AC%BC
    SpawnPotentials: SpawnerPotential[]
    SpawnRange: short
}

export interface SpawnerPotential {
    Entity: any // TODO
    Weight: int
}