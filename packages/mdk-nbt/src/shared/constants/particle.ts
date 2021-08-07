export type ParticleId = ParticleType | ParticleKind

export type ParticleType = 
    | 'ambient_entity_effect'   /** 信标效果 */
    | 'angry_villager'          /** 在村庄中攻击村民，村民因附近的没有足够的床而无法繁殖 */
    | 'barrier'                 /** 屏障 */
    | 'block'                   /** 摧毁盔甲架、跌落 */
    | 'bubble'                  /** 水中的实体、守卫者激光、钓鱼 */
    | 'bubble_column_up'        /** 由灵魂沙形成的上升气泡柱 */
    | 'bubble_pop'              /** 气泡柱顶部 */
    | 'campfire_cosy_smoke'     /** 营火产生的烟雾 */
    | 'cloud'                   /** 实体死亡时‌‌ */
    | 'crit'                    /** 暴击、弓箭、弩、尖牙 */
    | 'current_down'            /** 由岩浆块形成的向下气泡柱 */
    | 'damage_indicator'        /** 被近战攻击击中的生物和玩家 */
    | 'dolphin'                 /** 海豚游泳 */
    | 'dragon_breath'           /** 末影龙的龙息、末影龙火球 */
    | 'dripping_lava'           /** 渗过方块的熔岩颗粒 */
    | 'dripping_water'          /** 渗过方块的水颗粒、湿海绵、下雨时的树叶 */
    | 'dust'                    /** 红石矿石、充能的红石线、红石火把、充能的红石中继器、开启的拉杆 */
    | 'effect'                  /** 喷溅药水、滞留药水、附魔之瓶、唤魔者 */
    | 'elder_guardian'          /** 远古守卫者 */
    | 'enchant'                 /** 靠近书架的附魔台 */
    | 'enchanted_hit'           /** 使用附有锋利、亡灵杀手或节肢杀手等魔咒的剑或斧攻击 */
    | 'end_rod'                 /** 末地烛、潜影贝导弹 */
    | 'entity_effect'           /** 状态效果、滞留药水、光灵箭、交易、凋零盔甲（当颗粒效果中的“最少”被选定时，滞留药水的颗粒会减少） */
    | 'explosion'               /** 爆炸、恶魂火球、凋灵之首、末影龙死亡、剪哞菇的蘑菇 */
    | 'explosion_emitter'       /** 爆炸、末影龙死亡 */
    | 'falling_dust'            /** 浮起而未下落的沙子、沙砾、混凝土粉末和铁砧 */
    | 'firework'                /** 烟花火箭的尾迹和爆炸（尾迹不会在颗粒效果设为“最少”时显示）、海豚领路寻找海底废墟和沉船 */
    | 'fishing'                 /** 钓鱼 */
    | 'flame'                   /** 火把、熔炉、岩浆怪和刷怪箱 */
    | 'happy_villager'          /** 使用骨粉、与村民交易、喂养幼年动物、在海龟蛋上行走或踩踏 */
    | 'heart'                   /** 繁殖、驯服动物 */
    | 'instant_effect'          /** 瞬间治疗/瞬间伤害喷溅药水和滞留药水、光灵箭 */
    | 'item'                    /** 进食、扔出鸡蛋、喷溅药水、末影之眼、损坏物品 */
    | 'item_slime'              /** 跳跃的史莱姆 */
    | 'item_snowball'           /** 扔出雪球、召唤凋灵、召唤铁傀儡 */
    | 'large_smoke'             /** 火、动力矿车、烈焰人、水流入熔岩、熔岩流入水. */
    | 'lava'                    /** 熔岩 */
    | 'mycelium'                /** 菌丝方块 */
    | 'nautilus'                /** 激活的潮涌核心 */
    | 'note'                    /** 激活音符盒 */
    | 'poof'                    /** 爆炸、生物的死亡、刷怪蛋生成生物、蠹虫钻入方块 */
    | 'portal'                  /** 下界传送门、末影人、末影螨、末影珍珠、末影之眼、末影箱、龙蛋、进食紫颂果造成的瞬移、末地折跃门 */
    | 'rain'                    /** 下雨 */
    | 'smoke'                   /** 烟 */
    | 'sneeze'                  /** 幼年熊猫打喷嚏 */
    | 'spit'                    /** 羊驼啐玩家或生物 */
    | 'splash'                  /** 水中的实体、游泳上岸后的狼、船 */
    | 'squid_ink'               /** 鱿鱼被攻击时喷墨 */
    | 'sweep_attack'            /** 进行横扫攻击时的剑 */
    | 'totem_of_undying'        /** 不死图腾激活 */
    | 'underwater'              /** 水下的视野 */
    | 'witch'                   /** 女巫 */

export enum ParticleKind {
    /** 信标效果 */
    ambient_entity_effect = 'ambient_entity_effect',
    /** 在村庄中攻击村民，村民因附近的没有足够的床而无法繁殖 */
    angry_villager = 'angry_villager',
    /** 屏障 */
    barrier = 'barrier',
    /** 摧毁盔甲架、跌落 */
    block = 'block',
    /** 水中的实体、守卫者激光、钓鱼 */
    bubble = 'bubble',
    /** 由灵魂沙形成的上升气泡柱 */
    bubble_column_up = 'bubble_column_up',
    /** 气泡柱顶部 */
    bubble_pop = 'bubble_pop',
    /** 营火产生的烟雾 */
    campfire_cosy_smoke = 'campfire_cosy_smoke',
    /** 实体死亡时‌‌ */
    cloud = 'cloud',
    /** 暴击、弓箭、弩、尖牙 */
    crit = 'crit',
    /** 由岩浆块形成的向下气泡柱 */
    current_down = 'current_down',
    /** 被近战攻击击中的生物和玩家 */
    damage_indicator = 'damage_indicator',
    /** 海豚游泳 */
    dolphin = 'dolphin',
    /** 末影龙的龙息、末影龙火球 */
    dragon_breath = 'dragon_breath',
    /** 渗过方块的熔岩颗粒 */
    dripping_lava = 'dripping_lava',
    /** 渗过方块的水颗粒、湿海绵、下雨时的树叶 */
    dripping_water = 'dripping_water',
    /** 红石矿石、充能的红石线、红石火把、充能的红石中继器、开启的拉杆 */
    dust = 'dust',
    /** 喷溅药水、滞留药水、附魔之瓶、唤魔者 */
    effect = 'effect',
    /** 远古守卫者 */
    elder_guardian = 'elder_guardian',
    /** 靠近书架的附魔台 */
    enchant = 'enchant',
    /** 使用附有锋利、亡灵杀手或节肢杀手等魔咒的剑或斧攻击 */
    enchanted_hit = 'enchanted_hit',
    /** 末地烛、潜影贝导弹 */
    end_rod = 'end_rod',
    /** 状态效果、滞留药水、光灵箭、交易、凋零盔甲（当颗粒效果中的“最少”被选定时，滞留药水的颗粒会减少） */
    entity_effect = 'entity_effect',
    /** 爆炸、恶魂火球、凋灵之首、末影龙死亡、剪哞菇的蘑菇 */
    explosion = 'explosion',
    /** 爆炸、末影龙死亡 */
    explosion_emitter = 'explosion_emitter',
    /** 浮起而未下落的沙子、沙砾、混凝土粉末和铁砧 */
    falling_dust = 'falling_dust',
    /** 烟花火箭的尾迹和爆炸（尾迹不会在颗粒效果设为“最少”时显示）、海豚领路寻找海底废墟和沉船 */
    firework = 'firework',
    /** 钓鱼 */
    fishing = 'fishing',
    /** 火把、熔炉、岩浆怪和刷怪箱 */
    flame = 'flame',
    /** 使用骨粉、与村民交易、喂养幼年动物、在海龟蛋上行走或踩踏 */
    happy_villager = 'happy_villager',
    /** 繁殖、驯服动物 */
    heart = 'heart',
    /** 瞬间治疗/瞬间伤害喷溅药水和滞留药水、光灵箭 */
    instant_effect = 'instant_effect',
    /** 进食、扔出鸡蛋、喷溅药水、末影之眼、损坏物品 */
    item = 'item',
    /** 跳跃的史莱姆 */
    item_slime = 'item_slime',
    /** 扔出雪球、召唤凋灵、召唤铁傀儡 */
    item_snowball = 'item_snowball',
    /** 火、动力矿车、烈焰人、水流入熔岩、熔岩流入水. */
    large_smoke = 'large_smoke',
    /** 熔岩 */
    lava = 'lava',
    /** 菌丝方块 */
    mycelium = 'mycelium',
    /** 激活的潮涌核心 */
    nautilus = 'nautilus',
    /** 激活音符盒 */
    note = 'note',
    /** 爆炸、生物的死亡、刷怪蛋生成生物、蠹虫钻入方块 */
    poof = 'poof',
    /** 下界传送门、末影人、末影螨、末影珍珠、末影之眼、末影箱、龙蛋、进食紫颂果造成的瞬移、末地折跃门 */
    portal = 'portal',
    /** 下雨 */
    rain = 'rain',
    /** 烟 */
    smoke = 'smoke',
    /** 幼年熊猫打喷嚏 */
    sneeze = 'sneeze',
    /** 羊驼啐玩家或生物 */
    spit = 'spit',
    /** 水中的实体、游泳上岸后的狼、船 */
    splash = 'splash',
    /** 鱿鱼被攻击时喷墨 */
    squid_ink = 'squid_ink',
    /** 进行横扫攻击时的剑 */
    sweep_attack = 'sweep_attack',
    /** 不死图腾激活 */
    totem_of_undying = 'totem_of_undying',
    /** 水下的视野 */
    underwater = 'underwater',
    /** 女巫 */
    witch = 'witch',
}