import { LootContainer } from "@shared/__/Container";
import { Facing6State } from "@shared/state/facing";

export type DispenserId = 'dispenser'

export interface DispenserState extends Facing6State {
    /** 方块是否被激活，默认false */
    triggered: boolean
}

export interface Dispenser extends LootContainer {

}