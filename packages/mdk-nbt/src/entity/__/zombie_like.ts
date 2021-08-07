import { MobBase } from "./shared";
import { int } from "@shared/__/numberic";

export interface ZombieLike extends Omit<MobBase, 'id'> {
    id: ZombieLikeId,
    IsBaby?: boolean,
    CanBreakDoors?: boolean,
    DrownedConversionTime?: int,
    InWaterTime?: int,
}

export type ZombieLikeId = 'zombie' | 'husk' | 'drowned'