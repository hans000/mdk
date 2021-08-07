import { int } from "@shared/__/numberic"

export type EffectInt = EffectIntKind | int

/** 药水效果id */
export type EffectId = 
    | 'speed'               /** 速度 */
    | 'slowness'            /** 缓慢 */
    | 'haste'               /** 急迫 */
    | 'mining_fatigue'      /** 挖掘疲劳 */
    | 'strength'            /** 力量 */
    | 'instant_health'      /** 瞬间治疗 */
    | 'instant_damage'      /** 瞬间伤害 */
    | 'jump_boost'          /** 跳跃提升 */
    | 'nausea'              /** 反胃 */
    | 'regeneration'        /** 生命恢复 */
    | 'resistance'          /** 抗性提升 */
    | 'fire_resistance'     /** 防火 */
    | 'water_breathing'     /** 水下呼吸 */
    | 'invisibility'        /** 隐身 */
    | 'blindness'           /** 失明 */
    | 'nightVision'         /** 夜视 */
    | 'hunger'              /** 饥饿 */
    | 'weakness'            /** 虚弱 */
    | 'poison'              /** 中毒 */
    | 'wither'              /** 凋零 */
    | 'health_boost'        /** 生命提升 */
    | 'absorption'          /** 伤害吸收 */
    | 'saturation'          /** 饱和 */
    | 'glowing'             /** 发光 */
    | 'levitation'          /** 飘浮 */
    | 'luck'                /** 幸运 */
    | 'unLuck'              /** 霉运 */
    | 'slow_falling'        /** 缓降 */
    | 'conduit_power'       /** 潮涌能量 */
    | 'dolphins_grace'      /** 海豚恩惠 */
    | 'bad_omen'            /** 不祥之兆 */
    | 'hero_of_the_village' /** 村庄英雄 */

/** 药水效果数字id */
export enum EffectIntKind {
    /** 无 */
    None = 0,
    /** 速度 */
    Speed = 1,
    /** 缓慢 */
    Slowness = 2,
    /** 急迫 */
    Haste = 3,
    /** 挖掘疲劳 */
    MiningFatigue = 4,
    /** 力量 */
    Strength = 5,
    /** 瞬间治疗 */
    InstantHealth = 6,
    /** 瞬间伤害 */
    InstantDamage = 7,
    /** 跳跃提升 */
    JumpBoost = 8,
    /** 反胃 */
    Nausea = 9,
    /** 生命恢复 */
    Regeneration = 10,
    /** 抗性提升 */
    Resistance = 11,
    /** 防火 */
    FireResistance = 12,
    /** 水下呼吸 */
    WaterBreathing = 13,
    /** 隐身 */
    Invisibility = 14,
    /** 失明 */
    Blindness = 15,
    /** 夜视 */
    NightVision = 16,
    /** 饥饿 */
    Hunger = 17,
    /** 虚弱 */
    Weakness = 18,
    /** 中毒 */
    Poison = 19,
    /** 凋零 */
    Wither = 20,
    /** 生命提升 */
    HealthBoost = 21,
    /** 伤害吸收 */
    Absorption = 22,
    /** 饱和 */
    Saturation = 23,
    /** 发光 */
    Glowing = 24,
    /** 飘浮 */
    Levitation = 25,
    /** 幸运 */
    Luck = 26,
    /** 霉运 */
    UnLuck = 27,
    /** 缓降 */
    SlowFalling = 28,
    /** 潮涌能量 */
    ConduitPower = 29,
    /** 海豚恩惠 */
    DolphinsGrace = 30,
    /** 不祥之兆 */
    BadOmen = 31,
    /** 村庄英雄 */
    HeroOfTheVillage = 32,
}