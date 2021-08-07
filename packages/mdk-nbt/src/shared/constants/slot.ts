import { Int0_26, Int0_7, Int0_8 } from "./value"

export type SlotType =
    | 'mainhand' 
    | 'offhand' 
    | 'feet' 
    | 'legs' 
    | 'chest' 
    | 'head'

export type ArmorSlot = `armor.${'chest' | 'feet' | 'head' | 'legs'}`
export type WeaponSlot = `weapon.${'mainhand' | 'offhand'}`
export type HorseSlot = `horse.${'saddle' | 'armor'}`
export type HorseChestSlot = `horse.chese.${'saddle' | 'armor'}`
export type Enderchest = `enderchest.${Int0_26}`
export type Hotbar = `hotbar.${Int0_8}`
export type HopperInventory = `hopper.${Int0_26}`
export type VillagerInventory = `villager.${Int0_7}`
