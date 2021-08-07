import { LootContainer } from "@shared/__/Container";
import { Facing6State } from "@shared/state/facing";

export type BarrelId = 'barrel'

export interface BarrelState extends Facing6State {
    open: boolean
}

export interface Barrel extends LootContainer {}