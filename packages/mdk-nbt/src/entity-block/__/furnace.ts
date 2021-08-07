import { int, short } from "@/shared";
import { LootContainer } from "@shared/__/Container";
import { Facing4State } from "@shared/state/facing";

export type FurnaceId =
    | 'furnace'         /** 熔炉 */
    | 'smoker'          /** 烟熏炉 */
    | 'blast_furnace'   /** 高炉 */

export interface FurnaceState extends Facing4State {
    /** 熔炉是否是燃烧 */
    lit: boolean
}

export interface Furnace extends LootContainer {
    BurnTime: short
    CookTime: short
    CookTimeTotal: short
    RecipeLocationN: string // TODO
    RecipeAmountN: int
    RecipesUsedSize: short
}