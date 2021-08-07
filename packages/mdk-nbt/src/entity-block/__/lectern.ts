import { BlockEntityBase, int, InventoryItem } from "@/shared";
import { Facing4State } from "@shared/state/facing";

export type LecternId = 'lectern'

export interface LecternState extends Facing4State {
    /** 是否有书，默认false */
    has_book: boolean
    /** 是否充能，默认false */
    powered: boolean
}

export interface Lectern extends BlockEntityBase {
    /** 没有slot标签的书,目前来说如果放在讲台上,可能不会被放置在讲台上 */
    Book: InventoryItem
    /** 如果没有放置书籍，则书籍当前从0开始所在的页面不存在 */
    Page: int
}