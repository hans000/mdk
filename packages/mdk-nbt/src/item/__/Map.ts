import { ItemBase } from "./shared";
import { int, double } from "@shared/__/numberic";

export interface FilledMap extends Partial<ItemBase> {
	id: MapId,
	map: int,
	map_scale_direction: [int],
	Decorations: Decoration[],
	display: Display
}

export interface Decoration {
	id: string,
	type: IconKind,
	x: double,
	z: double,
	rot: double
}

export enum IconKind {
	/// White pentagon
	Player = 0,
	/// Green pentagon
	Frame = 1,
	/// Red pentagon
	RedMarker = 2,
	/// Blue pentagon
	BlueMarker = 3,
	/// White x
	TargetX = 4,
	/// Red triangle
	TargetPoint = 5,
	/// Large white dot
	PlayerOffMap = 6,
	/// Small white dot
	PlayerOffLimits = 7,
	/// Woodland mansion
	Mansion = 8,
	/// Ocean monument
	Monument = 9,
	/// White banner
	WhiteBanner = 10,
	/// Orange banner
	OrangeBanner = 11,
	/// Magenta banner
	MagentaBanner = 12,
	/// Light blue banner
	LightBlueBanner = 13,
	/// Yellow banner
	YellowBanner = 14,
	/// Lime banner
	LimeBanner = 15,
	/// Pink banner
	PinkBanner = 16,
	/// Gray banner
	GrayBanner = 17,
	/// Light gray banner
	LightGrayBanner = 18,
	/// Cyan banner
	CyanBanner = 19,
	/// Purple banner
	PurpleBanner = 20,
	/// Blue banner
	BlueBanner = 21,
	/// Brown banner
	BrownBanner = 22,
	/// Green banner
	GreenBanner = 23,
	/// Red banner
	RedBanner = 24,
	/// Black banner
	BlackBanner = 25,
	/// Red x
	RedX = 26,
}

export interface Display {
	Name: string,
	Lore: [string],
	MapColor: int
}

export type MapId = 'filled_map'