import { double } from "./numberic";
import { UUID } from "./uuid";

/** 属性修饰符 */
export interface AttributeModifier {
    /** 属性名称 */
    AttributeName?: string // TODO mdk-nbt 
    /** 修饰符的名称 */
    Name?: string
    /** 指定修饰符产生效果的槽位 */
    Slot?: AttributeSlot
    /** 属性修饰符 */
    Operation?: ModifierOperation
    /** 修饰符的数额 */
    Amount?: double
    /** 属性的UUID */
    UUID?: UUID
}

export type AttributeSlot =
    | "mainhand"
    | "offhand"
    | "feet"
    | "legs"
    | "chest"
    | "head"

export type ModifierOperation = string
// TODO mdk-nbt https://minecraft.fandom.com/zh/wiki/%E5%B1%9E%E6%80%A7#.E4.BF.AE.E9.A5.B0.E7.AC.A6