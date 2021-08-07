import { WrittenBook, WritableBook, CrossBow, EffectItem, EnchantedBook, FireworkStar, FireworkRocketItem, FishBucket, PlayerHeadItem, KnowlegeBook, LeatherArmor, FilledMap, Shield, SpawnEgg, SuspiciousStew } from "./__";
import { ItemBase, BlockItem } from './__/shared'

export type Item =
    | ItemBase
    | BlockItem
    | WrittenBook
    | WritableBook
    | CrossBow
    | EffectItem
    | EnchantedBook
    | FireworkStar
    | FireworkRocketItem
    | FishBucket
    | PlayerHeadItem
    | KnowlegeBook
    | LeatherArmor
    | FilledMap
    | Shield
    | SpawnEgg
    | SuspiciousStew