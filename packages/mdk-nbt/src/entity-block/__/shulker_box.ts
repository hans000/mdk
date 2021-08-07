import { LootContainer } from "@shared/__/Container";
import { ItemColor } from "@shared/constants/color";
import { Facing6State } from "@shared/state/facing";

export type ShulkerBoxId = `${ItemColor}_shulker_box` | 'shulker_box'

export interface ShulkerBoxState extends Facing6State {
}

export interface ShulkerBox extends LootContainer {
}