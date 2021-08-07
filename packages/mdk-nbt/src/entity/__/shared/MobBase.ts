import { float, InventoryItem, long } from "@shared/__";
import { LivingEntity, UUIDLeash, BlockLeash } from "./LivingEntity";

/**
 * Mob nbt标签
 */
export interface MobBase extends Omit<LivingEntity, 'id'> {
    /** 生物id */
    id: MobBaseId,
    /** 列表手持的物品的列表，顺序由主手到副手。 */
    HanderItems?: [InventoryItem, InventoryItem];
    /** 生物正在穿戴的盔甲的列表，顺序按照：足部、腿部、胸部、头部。 */
    ArmorItems?: [InventoryItem, InventoryItem, InventoryItem, InventoryItem];
    /** 代表手持物品掉落几率的浮点数的列表。 */
    HandDropChances?: [float, float];
    /** 代表穿戴盔甲掉落几率的浮点数的列表。 */
    ArmorDropChances?: [float, float, float, float];
    /** 该实体被杀死后掉落物品的战利品表。 */
    DeathLootTable?: string;
    /** 生成战利品表的种子。0或未定义则使用随机种子。 */
    DeathLootTableSeed?: long;
    /** 如果生物可以捡起战利品，则为true */
    CanPickUpLoot?: boolean;
    /** 如果生物不被自然删除，则为true。 */
    PersistenceRequired?: boolean;
    /** 如果生物渲染时的主手是左手，则为true。 */
    LeftHanded?: boolean;
    /** 表示生物是否被拴住。 */
    Leashed?: boolean;
    /** 在拴绳连接在另一个实体上时包括一对UUID长整数；或是在拴绳连接到栅栏时为X、Y、Z整数的组合。 */
    Leash?: UUIDLeash | BlockLeash;
}

export type MobBaseId = 
    | 'blaze' 
    | 'cave_spider' 
    | 'elder_guardian' 
    | 'giant' 
    | 'guardian' 
    | 'silverfish' 
    | 'skeleton' 
    | 'spider' 
    | 'squid' 
    | 'stray' 
    | 'wither_skeleton' 