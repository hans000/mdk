import { InventoryItem } from "@shared/index";
import { ItemBase } from "./shared";

export interface CrossBow extends Partial<ItemBase> {
    id: CrossBowId,
    ChargedProjectiles?: InventoryItem[];
    Charged?: boolean;
}

export type CrossBowId = 'crossbow'