import { int } from "@shared/__/numberic"

export type EnchantmentInt = EnchantmentIntKind | int

export type EnchantmentId = 
    | 'protection'              /** 保护 */
    | 'fire_protection'         /** 火焰保护 */
    | 'feather_falling'         /** 摔落保护 */
    | 'blast_protection'        /** 爆炸保护 */
    | 'projectile_protection'   /** 弹射物保护 */
    | 'respiration'             /** 水下呼吸 */
    | 'aqua_affinity'           /** 水下速掘 */
    | 'thorns'                  /** 荆棘 */
    | 'depth_strider'           /** 深海探索者 */
    | 'frost_walker'            /** 冰霜行者 */
    | 'binding_curse'           /** 绑定诅咒 */
    | 'sharpness'               /** 锋利 */
    | 'smite'                   /** 亡灵杀手 */
    | 'bane_of_arthropods'      /** 节肢杀手 */
    | 'knockback'               /** 击退 */
    | 'fire_aspect'             /** 击退 */
    | 'looting'                 /** 抢夺 */
    | 'sweeping'                /** 横扫之刃 */
    | 'efficiency'              /** 效率 */
    | 'silk_touch'              /** 精准采集 */
    | 'unbreaking'              /** 耐久 */
    | 'fortune'                 /** 时运 */
    | 'power'                   /** 力量 */
    | 'punch'                   /** 冲击 */
    | 'flame'                   /** 火矢 */
    | 'infinity'                /** 无限 */
    | 'luck_of_the_sea'         /** 海之眷顾 */
    | 'lure'                    /** 饵钓 */
    | 'mending'                 /** 经验修补 */
    | 'vanishing_curse'         /** 消失诅咒 */

export enum EnchantmentIntKind {
    /** 保护 */
    Protection = 0,
    /** 火焰保护 */
    FireProtection = 1,
    /** 摔落保护 */
    FeatherFalling = 2,
    /** 爆炸保护 */
    BlastProtection = 3,
    /** 弹射物保护 */
    ProjectileProtection = 4,
    /** 水下呼吸 */
    Respiration = 5,
    /** 水下速掘 */
    AquaAffinity = 6,
    /** 荆棘 */
    Thorns = 7,
    /** 深海探索者 */
    DepthStrider = 8,
    /** 冰霜行者 */
    FrostWalker = 9,
    /** 绑定诅咒 */
    BindingCurse = 10,
    /** 锋利 */
    Sharpness = 16,
    /** 亡灵杀手 */
    Smite = 17,
    /** 节肢杀手 */
    BaneOfArthropods = 18,
    /** 击退 */
    Knockback = 19,
    /** 火焰附加 */
    FireAspect = 20,
    /** 抢夺 */
    Looting = 21,
    /** 横扫之刃 */
    Sweeping = 22,
    /** 效率 */
    Efficiency = 32,
    /** 精准采集 */
    SilkTouch = 33,
    /** 耐久 */
    Unbreaking = 34,
    /** 时运 */
    Fortune = 35,
    /** 力量 */
    Power = 48,
    /** 冲击 */
    Punch = 49,
    /** 火矢 */
    Flame = 50,
    /** 无限 */
    Infinity = 51,
    /** 海之眷顾 */
    LuckOfTheSea = 61,
    /** 饵钓 */
    Lure = 62,
    /** 经验修补 */
    Mending = 70,
    /** 消失诅咒 */
    VanishingCurse = 71,
}