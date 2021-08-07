import { Display } from "@/item/__";
import { EnchantmentId } from "@shared/constants/enchantment";
import { AttributeModifier } from "@shared/__";
import { int } from "@shared/__/numberic";

export interface ItemBase {
    Damage: int;
    Unbreakable: boolean;
    CanDestory: string[];
    CustomModelData: number;
    Enchantments: EnchantmentId[];
    RepairCost: int;
    AttributeModifiers: AttributeModifier[];
    display: Display;
    HideFlags: int;
}
