import { AxolotlId } from './__/axolotl';
import { ZoglinId } from './__/zoglin';
import { ArmorStandId } from "./__/armorstand";
import { ArrowId, SpectralArrowId, TridentId } from "./__/arrow";
import { BatId } from "./__/bat";
import { BeeId } from "./__/bee";
import { CatId } from "./__/cat";
import { ChickenId } from "./__/chicken";
import { CreeperId } from "./__/creeper";
import { DolphinId } from "./__/dolphin";
import { EffectCloudId } from "./__/effect_cloud";
import { EnderDragonId } from "./__/ender_dragon";
import { EnderManId } from "./__/ender_man";
import { EnderMiteId } from "./__/ender_mite";
import { EndCrystalId } from "./__/end_crystal";
import { EvokerFangsId } from "./__/evoker_fangs";
import { EyeOfEnderId } from "./__/eye_ender";
import { FallingBlockId } from "./__/falling_block";
import { FireworkRocketId } from "./__/firework_rocket";
import { FireballBaseId, FireballId, LargeFireballId } from "./__/fire_ball";
import { FishId, PufferfishId, TropicalFishId } from "./__/fish";
import { FoxId } from "./__/fox";
import { GhostId } from "./__/ghost";
import { ChestedHorseId, HorseId, SkeletonHorseId } from "./__/horse";
import { IronGolemId } from "./__/iron_golem";
import { EntityItemId } from "./__/item";
import { ItemFrameId } from "./__/item_frame";
import { LlamaId, TraderLlamaId } from "./__/llama";
import { LlamaSpitId } from "./__/llama_spit";
import { MooshroomId } from "./__/mooshroom";
import { OcelotId } from "./__/ocelot";
import { PaintingId } from "./__/painting";
import { PandaId } from "./__/panda";
import { ParrotId } from "./__/parrot";
import { PhantomId } from "./__/phantom";
import { PigId } from "./__/pig";
import { PiglinId, ZombifiedPiglinId } from "./__/piglin";
import { PillagerId } from "./__/pillager";
import { PlayerId } from "./__/player";
import { RabbitId } from "./__/rabbit";
import { RavagerId } from "./__/ravager";
import { SheepId } from "./__/sheep";
import { ShulkerId, ShulkerBulletId } from "./__/shulker";
import { SlimeLikeId } from "./__/slime_like";
import { SnowGolemId } from "./__/snow_golem";
import { SpellcasterId } from "./__/spellcaster";
import { TntId } from "./__/tnt";
import { WanderingTraderId } from "./__/trader";
import { TurtleId } from "./__/turtle";
import { VexId } from "./__/vex";
import { VillagerId } from "./__/villager";
import { VindicatorId } from "./__/vindicator";
import { WitherId } from "./__/wither";
import { WolfId } from "./__/wolf";
import { XpOrbId } from "./__/xp_orb";
import { ZombieLikeId } from "./__/zombie_like";
import { ZombiePigmanId } from "./__/zombie_pigman";
import { MineCartId } from "./__/minecart";
import { BoatId, GoatId, MarkerId } from "./__";
import { BreedableId, MobBaseId, RaiderBaseId, BasicThrowableId } from './__/shared'

export type EntityId =
    | BreedableId
    | MobBaseId
    | RaiderBaseId
    | BasicThrowableId
    | ArmorStandId 
    | ArrowId 
    | SpectralArrowId 
    | TridentId 
    | BatId 
    | BeeId 
    | CatId 
    | ChestedHorseId
    | ChickenId 
    | CreeperId 
    | DolphinId 
    | EffectCloudId 
    | EndCrystalId 
    | EnderDragonId 
    | EnderManId 
    | EnderMiteId 
    | EvokerFangsId 
    | EyeOfEnderId 
    | FallingBlockId 
    | FireballBaseId 
    | FireballId 
    | LargeFireballId 
    | FireworkRocketId 
    | FishId 
    | PufferfishId 
    | TropicalFishId 
    | FoxId 
    | GhostId 
    | HorseId 
    | IronGolemId 
    | ItemFrameId 
    | EntityItemId 
    | LlamaSpitId 
    | LlamaId 
    | TraderLlamaId 
    | MooshroomId 
    | OcelotId 
    | PaintingId 
    | PandaId 
    | ParrotId 
    | PhantomId 
    | PigId 
    | PiglinId 
    | ZombifiedPiglinId
    | PillagerId 
    | PlayerId 
    | RabbitId 
    | RavagerId 
    | SheepId 
    | ShulkerId 
    | ShulkerBulletId 
    | SkeletonHorseId
    | SlimeLikeId
    | SnowGolemId
    | SpellcasterId
    | TntId
    | WanderingTraderId
    | TurtleId
    | VexId
    | VillagerId
    | VindicatorId
    | WitherId
    | WolfId
    | XpOrbId
    | ZombieLikeId
    | ZombiePigmanId
    | MineCartId
    | BoatId
    | MarkerId
    | ZoglinId
    | GoatId
    | AxolotlId
    | SkeletonHorseId
