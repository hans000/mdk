import { BlockEntityBase } from "@shared/__/BlockEntity";

export type EnchantingTableId = 'enchanting_table'

export interface EnchantingTable extends BlockEntityBase {
    /** 附魔台的名字 */
    CustomName: string
}