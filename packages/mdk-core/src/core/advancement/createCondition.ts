import { int, PotionId, RangeObject } from 'mdk-nbt';

/**
 * 玩家破坏蜂巢或蜂箱时触发
 */
export function beeNestDestroyed(props: {
    block: string
    item: any
    numBeesInside: int
    player: string[]
}) {
    
}

/**
 * 玩家繁殖两个动物时触发
 */
export function bredAnimals(props: {
    child: any
    parent: any
    partner: any
    player: string[]
}) {
    
}

/**
 * 玩家从酿造台中拿出一瓶药水时触发
 */
export function brewedPotion(props: {
    potion: PotionId
    player: string[]
}) {
    
}

/**
 * 玩家在两个维度间旅行时触发
 */
export function changedDimension(props: {
    from: string
    to: string
    player: string[]
}) {
    
}

/**
 * 玩家成功使用引雷附魔击杀实体时触发
 */
export function channeledLightning(props: {
    victims: any[]
    player: string[]
}) {
    
}

/**
 * 玩家更改信标结构时触发
 */
 export function constructBeacon(props: {
    level: RangeObject<int>
    player: string[]
}) {
    
}

/**
 * 玩家损耗了物品时触发
 */
 export function consumeItem(props: {
    item: any
    player: string[]
}) {
    
}

/**
 * 玩家治愈了僵尸村民时触发
 */
 export function curedZombieVillager(props: {
    villager: any
    zombie: any
    player: string[]
}) {
    
}

/**
 * 玩家获得/消除状态效果时触发
 */
 export function effectsChanged(props: {
    effects: any[]
    player: string[]
}) {
    
}

/**
 * 玩家获得/消除状态效果时触发
 */
 export function enchantedItem(props: {
    item: any
    levels: RangeObject<int>
    player: string[]
}) {
    
}

/**
 * 玩家进入方块时触发
 */
 export function enterBlock(props: {
    block: string
    state: any
    player: string[]
}) {
    
}

/**
 * 实体伤害玩家时触发，也在玩家受伤但没有实体时触发
 */
 export function entityHurtPlayer(props: {
    damage: string
    player: string[]
}) {
    
}

/**
 * 实体杀死玩家时触发
 */
 export function entityKilledPlayer(props: {
    entity: any
    killingBlow: any
    player: string[]
}) {
    
}

/**
 * 玩家填充桶时触发
 */
 export function filledBbucket(props: {
    item: any
    player: string[]
}) {
    
}

/**
 * 玩家成功通过钓鱼竿取得物品或者使用钓鱼竿拉实体时触发
 */
 export function fishingRodHooked(props: {
    entity: any
    item: any
    rod: any
    player: string[]
}) {
    
}

/**
 * 玩家击败袭击时触发，并检查玩家位置
 */
 export function heroOfTheVillage(props: {
    location: any
    player: string[]
}) {
    
}

/**
 * 仅可使用命令触发
 */
 export function impossible() {
    
}

/**
 * 玩家物品栏变化时触发
 */
 export function inventoryChanged(props: {
    items: any[]
    slots: any
    player: string[]
}) {
    
}

/**
 * 物品栏中任何物品以任何形式损害时触发
 */
 export function itemDurabilityChanged(props: {
    delta: RangeObject<int>
    durability: RangeObject<int>
    item: any
    player: string[]
}) {
    
}

/**
 * 玩家对方块使用物品时触发
 */
 export function itemUsedOnBlock(props: {
    location: any
    item: any
    player: string[]
}) {
    
}

/**
 * 玩家使用弩远程杀死生物或玩家时触发
 */
 export function killedByCrossbow(props: {
    uniqueEntityTypes: RangeObject<int>
    victims: any[]
    player: string[]
}) {
    
}

/**
 * 玩家获得漂浮状态效果时触发
 */
 export function levitation(props: {
    distance: any
    duration: RangeObject<int>
    player: string[]
}) {
    
}

/**
 * 每个游戏刻（每秒20次）检查玩家的位置
 */
 export function location(props: {
    location: any
    player: string[]
}) {
    
}

/**
 * 玩家进入下界，然后返回主世界时触发
 */
 export function netherTravel(props: {
    distance: any
    player: string[]
}) {
    
}

/**
 * 玩家放置方块时触发
 */
 export function placedBlock(props: {
    block: string
    item: any
    location: any
    state: any
    player: string[]
}) {
    
}

/**
 * 当玩家打开容器，并使之按照战利品表生成物品时触发
 */
 export function playerGeneratesContainerLoot(props: {
    lootTable: string
    player: string[]
}) {
    
}

/**
 * 玩家伤害实体（包括自己）时触发
 */
 export function playerHurtEntity(props: {
    damage: any
    entity: any
    player: string[]
}) {
    
}

/**
 * 玩家用手中物品与实体互动时触发
 */
 export function playerInteractedWithEntity(props: {
    item: any
    entity: any
    player: string[]
}) {
    
}

/**
 * 玩家杀死实体时触发
 */
 export function playerKilledEntity(props: {
    entity: any
    killingBlow: any
    player: string[]
}) {
    
}

/**
 * 玩家解锁配方时触发（例如用知识之书）
 */
 export function recipeUnlocked(props: {
    recipe: string
    player: string[]
}) {
    
}

/**
 * 玩家使用物品时触发
 */
 export function shotCrossbow(props: {
    item: any
    player: string[]
}) {
    
}

/**
 * 玩家上床睡觉时触发
 */
 export function sleptInBed(props: {
    location: any
    player: string[]
}) {
    
}

/**
 * 玩家滑下方块时触发
 */
 export function slideDownBlock(props: {
    block: string
    player: string[]
}) {
    
}

/**
 * 玩家召唤了实体时触发
 */
 export function summonedEntity(props: {
    entity: any
    player: string[]
}) {
    
}

/**
 * 玩家驯服动物时触发
 */
 export function tameAnimal(props: {
    entity: any
    player: string[]
}) {
    
}

/**
 * 玩家射中标靶时触发
 */
 export function targetHit(props: {
    signalStrength: int
    projectile: string
    shooter: any
    player: string[]
}) {
    
}

/**
 * 在实体捡起玩家扔出的物品时触发
 */
 export function thrownItemPickedUpByEntity(props: {
    item: any
    entity: any
    player: string[]
}) {
    
}

/**
 * 每个游戏刻触发（每秒20次）
 */
 export function tick(props: {
    player: string[]
}) {
    
}

/**
 * 玩家使用末影之眼（在有要塞生成的世界）时触发
 */
 export function usedEnderEye(props: {
    distance: RangeObject<int>
    player: string[]
}) {
    
}

/**
 * 玩家使用图腾时触发
 */
 export function usedTotem(props: {
    item: any
    player: string[]
}) {
    
}

/**
 * 玩家与村民交易时触发
 */
 export function villagerTrade(props: {
    item: any
    villager: any
    player: string[]
}) {
    
}

/**
 * 玩家引发袭击时触发，并检查玩家位置
 */
 export function voluntaryExile(props: {
    location: any
    player: string[]
}) {
    
}