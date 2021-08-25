import { byte, int } from "@shared/__/numberic";
import { AttributeModifier } from "./AttributeModifier";
import { Enchantment } from "./Enchantment";
import { PotionEffect } from "./PotionEffect";

/** 通用标签 */
export interface GeneralTag {
    /** 物品的损害值。默认为0 */
    Damage?: int
    /** 是否不可破坏，默认为false */
    Unbreakable?: boolean
    /** 冒险模式的玩家可以使用这个工具破坏的方块 */
    CanDestroy?: string[]
    /** 用于物品模型的 overrides 属性中的物品标签 “custom_model_data” */
    CustomModelData?: int
    /** 冒险模式的玩家可以将方块放置在其表面的方块 */
    CanPlaceOn?: string[]
    /** 方块放置后应用的方块实体NBT标签 */
    BlockEntityTag?: any //TODO mdk-nbt 
    /** 方块状态 */
    BlockStateTag?: any
    /** 影响物品特征的附魔信息 */
    Enchantments?: Enchantment[]
    /** 包含附魔书的魔咒 */
    StoredEnchantments?: Enchantment[]
    /** 当在铁砧上修理、合并或重命名当前物品时，表示在基础等级消耗之上额外增加的附魔等级 */
    RepairCost?: int
    /** 物品的修饰属性 */
    AttributeModifiers?: AttributeModifier[] // TODO mdk-nbt 
    /** 当前药水或药箭所含有的自定义状态效果 */
    CustomPotionEffects: PotionEffect[]
    /** 药水效果的名称 */
    Potion: byte
    /** 当前物品使用这项自定义颜色 */
    CustomPotionColor: int
    // TODO mdk-nbt https://minecraft.fandom.com/zh/wiki/Player.dat%E6%A0%BC%E5%BC%8F#.E7.89.A9.E5.93.81.E7.BB.93.E6.9E.84
}