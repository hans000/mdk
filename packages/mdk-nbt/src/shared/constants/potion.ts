export type PotionId = PotionType | PotionKind

export type PotionType = 
    | 'water'                   /** 水瓶 */
    | 'mundane'                 /** 平凡的药水 */
    | 'thick'                   /** 浑浊的药水 */
    | 'awkward'                 /** 粗制的药水 */
    | 'night_vision'            /** 夜视 */
    | 'long_night_vision'       /** 夜视延长 */
    | 'invisibility'            /** 隐身 */
    | 'long_invisibility'       /** 隐身延长 */
    | 'leaping'                 /** 跳跃 */
    | 'strong_leaping'          /** 跳跃2 */
    | 'long_leaping'            /** 跳跃延长 */
    | 'fire_resistance'         /** 抗火 */
    | 'long_fire_resistance'    /** 抗火延长 */
    | 'swiftness'               /** 迅捷 */
    | 'strong_swiftness'        /** 迅捷2 */
    | 'long_swiftness'          /** 迅捷延长 */
    | 'slowness'                /** 缓慢 */
    | 'long_slowness'           /** 缓慢延长 */
    | 'water_breathing'         /** 水肺 */
    | 'long_water_breathing'    /** 水肺延长 */
    | 'healing'                 /** 治疗 */
    | 'strong_healing'          /** 治疗2 */
    | 'harming'                 /** 伤害 */
    | 'strong_harming'          /** 伤害延长 */
    | 'poison'                  /** 中毒 */
    | 'strong_poison'           /** 中毒2 */
    | 'long_poison'             /** 中毒延长 */
    | 'regeneration'            /** 再生 */
    | 'strong_regeneration'     /** 再生2 */
    | 'long_regeneration'       /** 再生延长 */
    | 'strength'                /** 力量 */
    | 'strong_strength'         /** 力量2 */
    | 'long_strength'           /** 力量延长 */
    | 'weakness'                /** 虚弱 */
    | 'long_weakness'           /** 虚弱延长 */
    | 'luck'                    /** 幸运 */
    | 'slow_falling'            /** 缓降 */
    | 'strong_slow_falling'     /** 缓降2 */
    | 'long_slow_falling'       /** 缓降延长 */
    | 'turtle_master'           /** 神龟药水 */
    | 'strong_turtle_master'    /** 神龟药水2 */
    | 'slow_falling'            /** 神龟药水延长 */

/** 药水id枚举值 */
export enum PotionKind {
    /** 水瓶 */
    water = 'water',
    /** 平凡的药水 */
    mundane = 'mundane',
    /** 浑浊的药水 */
    thick = 'thick',
    /** 粗制的药水 */
    awkward = 'awkward',
    /** 夜视 */
    night_vision = 'night_vision',
    /** 夜视延长 */
    long_night_vision = 'long_night_vision',
    /** 隐身 */
    invisibility = 'invisibility',
    /** 隐身延长 */
    long_invisibility = 'long_invisibility',
    /** 跳跃 */
    leaping = 'leaping',
    /** 跳跃2 */
    strong_leaping = 'strong_leaping',
    /** 跳跃延长 */
    long_leaping = 'long_leaping',
    /** 抗火 */
    fire_resistance = 'fire_resistance',
    /** 抗火延长 */
    long_fire_resistance = 'long_fire_resistance',
    /** 迅捷 */
    swiftness = 'swiftness',
    /** 迅捷2 */
    strong_swiftness = 'strong_swiftness',
    /** 迅捷延长 */
    long_swiftness = 'long_swiftness',
    /** 缓慢 */
    slowness = 'slowness',
    /** 缓慢延长 */
    long_slowness = 'long_slowness',
    /** 水肺 */
    water_breathing = 'water_breathing',
    /** 水肺延长 */
    long_water_breathing = 'long_water_breathing',
    /** 治疗 */
    healing = 'healing',
    /** 治疗2 */
    strong_healing = 'strong_healing',
    /** 伤害 */
    harming = 'harming',
    /** 伤害延长 */
    strong_harming = 'strong_harming',
    /** 中毒 */
    poison = 'poison',
    /** 中毒2 */
    strong_poison = 'strong_poison',
    /** 中毒延长 */
    long_poison = 'long_poison',
    /** 再生 */
    regeneration = 'regeneration',
    /** 再生2 */
    strong_regeneration = 'strong_regeneration',
    /** 再生延长 */
    long_regeneration = 'long_regeneration',
    /** 力量 */
    strength = 'strength',
    /** 力量2 */
    strong_strength = 'strong_strength',
    /** 力量延长 */
    long_strength = 'long_strength',
    /** 虚弱 */
    weakness = 'weakness',
    /** 虚弱延长 */
    long_weakness = 'long_weakness',
    /** 幸运 */
    luck = 'luck',
    /** 缓降 */
    slow_falling = 'slow_falling',
    /** 缓降2 */
    strong_slow_falling = 'strong_slow_falling',
    /** 缓降延长 */
    long_slow_falling = 'long_slow_falling',
    /** 神龟药水 */
    turtle_master = 'turtle_master',
    /** 神龟药水2 */
    strong_turtle_master = 'strong_turtle_master',
    /** 神龟药水延长 */
    long_turtle_master = 'slow_falling',
}