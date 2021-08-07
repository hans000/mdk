import { Distance } from "./Distance";
import { Effect } from "./Effect";
import { Equipment } from "./Equipment";

export interface EntityCommon {
    distance: Distance
    effects: Effect[]
    equipment: Equipment
    flags: {
        isOnFire: boolean
        isSneaking: boolean
        isSprinting: boolean
        isSwimming: boolean
        isBaby: boolean
    }
    // location: Location
    nbt: string
    player: any
    team: string
    type: string
    targetedEntity: EntityCommon
    vehicle: EntityCommon
}