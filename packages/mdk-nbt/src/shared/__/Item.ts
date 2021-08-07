import { BlockItem, BlockItemId } from "@/item/__";
import { byte } from "./numberic";


/**
 * 物品栏nbt标签
 */
 export interface InventoryItem {
    /** 物品id */
    id: BlockItemId, 
    /** 物品数量 */
    Count: byte,
    /** 物品tag */
    tag: Partial<Omit<BlockItem, 'id'>>,
}

export interface SlottedItem extends InventoryItem {
    Slot: byte
}