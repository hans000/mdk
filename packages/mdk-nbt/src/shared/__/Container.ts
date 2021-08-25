import { BlockEntityBase } from "./BlockEntity";
import { HasLoottable } from "./HasLoottable";

export interface Container extends BlockEntityBase {
    /** 当前容器名称 */
    CustomName: string
    Lock: string
    /** 当前容器内物品的列表 */
    Items: any // TODO mdk-nbt ItemEntity
}

export interface LootContainer extends Container, HasLoottable {

}