import { Axolotl } from './__/axolotl';
import { Boat, Goat, Marker, Zoglin } from "./__";
import { ArmorStand } from "./__/armorstand";
import { Arrow, SpectralArrow, Trident } from "./__/arrow";
import { Bat } from "./__/bat";
import { Bee } from "./__/bee";
import { Cat } from "./__/cat";
import { Chicken } from "./__/chicken";
import { Creeper } from "./__/creeper";
import { Dolphin } from "./__/dolphin";
import { EffectCloud } from "./__/effect_cloud";
import { EnderDragon } from "./__/ender_dragon";
import { Enderman } from "./__/ender_man";
import { Endermite } from "./__/ender_mite";
import { EndCrystal } from "./__/end_crystal";
import { EvokerFangs } from "./__/evoker_fangs";
import { EyeOfEnder } from "./__/eye_ender";
import { FallingBlock } from "./__/falling_block";
import { FireworkRocket } from "./__/firework_rocket";
import { Fireball, FireballBase, LargeFireball } from "./__/fire_ball";
import { Fish, Pufferfish, TropicalFish } from "./__/fish";
import { Fox } from "./__/fox";
import { Ghast } from "./__/ghost";
import { ChestedHorse, Horse, SkeletonHorse } from "./__/horse";
import { IronGolem } from "./__/iron_golem";
import { EntityItem } from "./__/item";
import { ItemFrame } from "./__/item_frame";
import { Llama, TraderLlama } from "./__/llama";
import { LlamaSpit } from "./__/llama_spit";
import { Mooshroom } from "./__/mooshroom";
import { Ocelot } from "./__/ocelot";
import { Painting } from "./__/painting";
import { Panda } from "./__/panda";
import { Parrot } from "./__/parrot";
import { Phantom } from "./__/phantom";
import { Pig } from "./__/pig";
import { Piglin, ZombifiedPiglin } from "./__/piglin";
import { Pillager } from "./__/pillager";
import { Player } from "./__/player";
import { Rabbit } from "./__/rabbit";
import { Ravager } from "./__/ravager";
import { Sheep } from "./__/sheep";
import { Shulker, ShulkerBullet } from "./__/shulker";
import { Slimelike } from "./__/slime_like";
import { SnowGolem } from "./__/snow_golem";
import { Spellcaster } from "./__/spellcaster";
import { Tnt } from "./__/tnt";
import { WanderingTrader } from "./__/trader";
import { Turtle } from "./__/turtle";
import { Vex } from "./__/vex";
import { Villager } from "./__/villager";
import { Vindicator } from "./__/vindicator";
import { Wither } from "./__/wither";
import { Wolf } from "./__/wolf";
import { XpOrb } from "./__/xp_orb";
import { ZombieLike } from "./__/zombie_like";
import { ZombiePigman } from "./__/zombie_pigman";
import { AnyEntity } from './__/shared/AnyEntity'
import { Breedable } from './__/shared/Breedable'
import { EntityBase } from './__/shared/EntityBase'
import { LivingEntity } from './__/shared/LivingEntity'
import { MobBase } from './__/shared/MobBase'
import { ProjectileBase } from './__/shared/ProjectileBase'
import { RaiderBase } from './__/shared/RaiderBase'
import { Tamable } from './__/shared/Tamable'
import { Throwable } from './__/shared/throwable'

export type Entity =
    | AnyEntity
    | Breedable
    | EntityBase
    | LivingEntity
    | MobBase
    | ProjectileBase
    | RaiderBase
    | Tamable
    | Throwable 
    | ArmorStand
    | Arrow
    | SpectralArrow
    | Trident
    | Bat
    | Bee
    | Cat
    | ChestedHorse
    | Chicken
    | Creeper
    | Dolphin
    | EffectCloud
    | EndCrystal
    | EnderDragon
    | Enderman
    | Endermite
    | EvokerFangs
    | EyeOfEnder
    | FallingBlock
    | Fireball
    | FireballBase
    | LargeFireball
    | FireworkRocket
    | Fish
    | Pufferfish
    | TropicalFish
    | Fox
    | Ghast
    | Horse
    | IronGolem
    | ItemFrame
    | EntityItem
    | LlamaSpit
    | Llama
    | TraderLlama
    | Mooshroom
    | Ocelot
    | Painting
    | Panda
    | Parrot
    | Phantom
    | Pig
    | Piglin
    | ZombifiedPiglin
    | Pillager
    | Player
    | Rabbit
    | Ravager
    | Sheep
    | Shulker
    | ShulkerBullet
    | SkeletonHorse
    | Slimelike
    | SnowGolem
    | Spellcaster
    | Tnt
    | WanderingTrader
    | Turtle
    | Vex
    | Villager
    | Vindicator
    | Wither
    | Wolf
    | XpOrb
    | ZombieLike
    | ZombiePigman
    | Boat
    | Marker
    | Zoglin
    | Goat
    | Axolotl