import { LootContainer } from "@shared/__/Container";
import { Facing6State } from "@shared/state/facing";

export type DropperId = 'dropper'

export interface DropperState extends Facing6State {
    triggered: boolean
}

export interface Dropper extends LootContainer {
}