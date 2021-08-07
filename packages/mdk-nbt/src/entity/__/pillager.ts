import { RaiderBase } from "./shared";
import { SlottedItem } from "@shared/index";

export interface Pillager extends Omit<RaiderBase, 'id'> {
	id: PillagerId,
	Inventory?: SlottedItem[]
}

export type PillagerId = 'pillager'