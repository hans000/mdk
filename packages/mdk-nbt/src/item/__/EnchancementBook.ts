import { EnchantmentId } from "@shared/constants/enchantment";
import { ItemBase } from "./shared";

export interface EnchantedBook extends Partial<ItemBase> {
    id: EnchantedBookId,
    StoredEnchantments?: EnchantmentId[]
}

export type EnchantedBookId = 'enchanted_book'