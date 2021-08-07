import { InventoryItem } from "@shared/__/Item";

export type JukeboxId = 'jukebox'

export interface JukeboxState {
    /** 唱片机内是否有唱片 */
    has_record: boolean
}

export interface Jukebox {
    RecordItem: InventoryItem
}
