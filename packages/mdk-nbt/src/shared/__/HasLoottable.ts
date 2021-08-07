import { long } from "..";

export interface HasLoottable {
    /** 战利品表 */
    LootTable: string
    /** 生成战利品表的种子 */
    LootTableSeed: long
}