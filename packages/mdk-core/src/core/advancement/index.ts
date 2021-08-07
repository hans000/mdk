

export type FrameType = 'task' | 'goal' | 'challenge'

export enum FrameKind {
    /** 挑战进度边框 */
    Task = 'task',
    /** 目标进度边框 */
    Goal = 'goal',
    /** 普通进度边框 */
    Challenge = 'challenge'
}

export interface AdvancementRewards {
    /** 配方列表 */
    recipes: string[]
    /** 配方列表 */
    loot: string[]
    /** 经验 */
    experience: number
    /** 函数 */
    function: string
}

export interface AdvancementDisplay {
    /** 进度图标 */
    icon: {
        /** 物品nbt标签 */
        item: string
        /** 物品nbt标签 */
        nbt: string
    }
    /** 进度标题 */
    title: string
    /** 进度描述 */
    description: string
    /** 进度边框样式 */
    frame: FrameType
    /** 进度背景图片 */
    background: string
    /** 完成此进度后显示提示信息 */
    showToast: boolean
    /** 完成此进度时在聊天窗口提示 */
    announceToChat: boolean
    /** 在进度屏幕隐藏此进度 */
    hidden: boolean
}

export interface Enchantment {
    enchantment: Enchantment
    levels: number | Range
}

export type TriggerId = TriggerKind | TriggerType

export type TriggerType = 
    | "bee_nest_destroyed" 
    | "bred_animals" 
    | "brewed_potion" 
    | "changed_dimension" 
    | "channeled_lightning" 
    | "construct_beacon" 
    | "consume_item" 
    | "cured_zombie_villager" 
    | "effects_changed" 
    | "enchanted_item" 
    | "enter_block" 
    | "entity_hurt_player" 
    | "entity_killed_player" 
    | "filled_bucket" 
    | "fishing_rod_hooked" 
    | "hero_of_the_village" 
    | "impossible" 
    | "inventory_changed" 
    | "item_durability_changed" 
    | "item_used_on_block" 
    | "killed_by_crossbow" 
    | "levitation" 
    | "location" 
    | "nether_travel" 
    | "placed_block" 
    | "player_generates_container_loot" 
    | "player_hurt_entity" 
    | "player_interacted_with_entity" 
    | "player_killed_entity" 
    | "recipe_unlocked" 
    | "shot_crossbow" 
    | "slept_in_bed" 
    | "slide_down_block" 
    | "summoned_entity" 
    | "tame_animal" 
    | "target_hit" 
    | "thrown_item_picked_up_by_entity" 
    | "tick" 
    | "used_ender_eye" 
    | "used_totem" 
    | "villager_trade" 
    | "voluntary_exile"

export enum TriggerKind {
    BeeNestDestroyed = 'bee_nest_destroyed',
    BredAnimals = 'bred_animals',
    BrewedPotion = 'brewed_potion',
    ChangedDimension = 'changed_dimension',
    ChanneledLightning = 'channeled_lightning',
    ConstructBeacon = 'construct_beacon',
    ConsumeItem = 'consume_item',
    CuredZombieVillager = 'cured_zombie_villager',
    EffectsChanged = 'effects_changed',
    EnchantedItem = 'enchanted_item',
    EnterBlock = 'enter_block',
    EntityHurtPlayer = 'entity_hurt_player',
    EntityKilledPlayer = 'entity_killed_player',
    FilledBucket = 'filled_bucket',
    FishingRodHooked = 'fishing_rod_hooked',
    HeroOfTheVillage = 'hero_of_the_village',
    Impossible = 'impossible',
    InventoryChanged = 'inventory_changed',
    ItemDurabilityChanged = 'item_durability_changed',
    ItemUsedOnBlock = 'item_used_on_block',
    killedByCrossbow = 'killed_by_crossbow',
    Levitation = 'levitation',
    Location = 'location',
    NetherTravel = 'nether_travel',
    PlacedBlock = 'placed_block',
    PlayerGeneratesContainerLoot = 'player_generates_container_loot',
    PlayerHurtEntity = 'player_hurt_entity',
    PlayerInteractedWithEntity = 'player_interacted_with_entity',
    PlayerKilledEntity = 'player_killed_entity',
    RecipeUnlocked = 'recipe_unlocked',
    ShotCrossbow = 'shot_crossbow',
    SleptInBed = 'slept_in_bed',
    SlideDownBlock = 'slide_down_block',
    SummonedEntity = 'summoned_entity',
    TameAnimal = 'tame_animal',
    TargetHit = 'target_hit',
    ThrownItemPickedUpByEntity = 'thrown_item_picked_up_by_entity',
    Tick = 'tick',
    UsedEnderEye = 'used_ender_eye',
    UsedTotem = 'used_totem',
    VillagerTrade = 'villager_trade',
    VoluntaryExile = 'voluntary_exile',
}
type BlockId = ''
type EntityId = ''
type BiomeType = "desert"
type StructureType = "EndCity"
type PotionType = ""

interface Range {
    min?: number
    max?: number
}

export interface AdvancementProperties {
    /** 进度配置准则 */
    criteria: AdvancementCriteria
    /** 父级的进度id */
    parent?: string
    /** 显示的配置 */
    display?: AdvancementDisplay
    /** 进度达成的条件 */
    requirements?: string[][]
    /** 进度达成后的奖励 */
    rewards?: AdvancementRewards
}

interface AdvancementCriteria {
    trigger: TriggerType | TriggerKind
    conditions: any
}

const foo: AdvancementProperties = {
    criteria: {
        trigger: 'changed_dimension',
        conditions: {

        }
    }
}




class Advancement {

    constructor(props: AdvancementProperties) {

    }
}
// {
//     "rewards": {
//         "commands": [
//             "advancement revoke @s only cmdtest:test",
//             "say this is a module and the executor is @s",
//             "say 3"
//         ]
//     },
//     ...
// }

// Advancement({

// })