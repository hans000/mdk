import { MobBase, EntityBase } from "./shared"
import { int, double, long } from "@shared/__/numberic"

export interface Shulker extends Omit<MobBase, 'id'> {
	id: ShulkerId,
	Peek?: boolean,
	AttachFace?: AttachFaceKind,
	Color?: ShulkerColorKind,
	APX?: int,
	APY?: int,
	APZ?: int
}

export enum AttachFaceKind {
	Down = 0,
	Up = 1,
	North = 2,
	South = 3,
	West = 4,
	East = 5
}

export enum ShulkerColorKind {
	White = 0,
	Orange = 1,
	Magenta = 2,
	LightBlue = 3,
	Yellow = 4,
	Lime = 5,
	Pink = 6,
	Gray = 7,
	LightGray = 8,
	Cyan = 9,
	Purple = 10,
	Blue = 11,
	Brown = 12,
	Green = 13,
	Red = 14,
	Black = 15,
	Normal = 16
}

export interface ShulkerBullet extends Omit<EntityBase, 'id'> {
	id: ShulkerBulletId
	Owner?: BulletTarget,
	Steps?: int,
	Target?: BulletTarget,
	TXD?: double,
	TYD?: double,
	TZD?: double
}

export interface BulletTarget {
	M: long,
	L: long,
	X: int,
	Y: int,
	Z: int
}

export type ShulkerId = 'shulker'
export type ShulkerBulletId = 'shulker_bullet'