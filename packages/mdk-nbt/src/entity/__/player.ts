import { DimensionKind } from "@shared/constants/dimension";
import { GameModeKind } from "@shared/constants/gamemode";
import { LivingEntity, AnyEntity } from "./shared";
import { SlottedItem } from "@shared/__/Item";
import { int, short, float, double, long } from "@shared/__/numberic";

export interface Player extends Omit<LivingEntity, 'id'> {
	id: 'player', // TODO check?
	DataVersion?: int,
	Dimension?: DimensionKind,
	playerGameType?: GameModeKind,
	Score?: int,
	SelectedItemSlot?: int,
	SelectedItem?: SlottedItem,
	SpawnX?: int,
	SpawnY?: int,
	SpawnZ?: int,
	SpawnForced?: boolean,
	SleepTimer?: short,
	foodLevel?: int,
	foodExhaustionLevel?: float,
	foodSaturationLevel?: float,
	foodTickTimer?: int,
	XpLevel?: int,
	XpP?: float,
	XpTotal?: int,
	XpSeed?: int,
	Inventory?: SlottedItem[],
	EnderItems?: SlottedItem[],
	abilities?: Abilities,
	enteredNetherPosition?: EnteredNetherPosition,
	RootVehicle?: RootVehicle,
	ShoulderEntityLeft?: AnyEntity,
	ShoulderEntityRight?: AnyEntity,
	seenCredits?: boolean,
	recipeBook?: RecipeBook,
	CustomName?: string,
	CustomNameVisible?: boolean
}

export interface Abilities {
	walkSpeed?: float,
	flySpeed?: float,
	mayfly?: boolean,
	flying?: boolean,
	invulnerable?: boolean,
	mayBuild?: boolean,
	instabuild?: boolean
}

export interface EnteredNetherPosition {
	x?: double,
	y?: double,
	z?: double
}

export interface RootVehicle {
	AttachMost?: long,
	AttachLeast?: long,
	Entity?: AnyEntity
}

export interface RecipeBook {
	recipes?: string[],
	toBeDisplayed?: string[],
	isFilteringCraftable?: boolean,
	isGuiOpen?: boolean,
	isFurnaceFilteringCraftable?: boolean,
	isFurnaceGuiOpen?: boolean
}

export type PlayerId = 'player'