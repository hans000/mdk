import { ProjectileBase } from "./shared"
import { byte, short, double, long, int, PotionEffect, InventoryItem } from "@shared/index"


/**
 * 箭基本nbt标签
 */
export interface ArrowBase extends ProjectileBase {
	/** 弹射物击中方块时产生的“摇动”。 */
	shake?: byte,
	/** 0表示不可被玩家捡起。1表示可以被玩家在生存或创造模式中捡起。2表示仅可以被创造模式的玩家捡起。 */
	pickup?: PickupKind,
	/** 如果pickup未定义，则此项为true，表示箭可以被玩家捡起。 */
	player?: boolean,
	/** 箭不处于移动状态时每刻增大；开始移动时重置为0。当此项计至1200后，箭被删除。 */
	life?: short,
	/** 箭将造成的伤害，以半颗心计量。不一定为整数。普通的箭为2.0，发射箭的弓的力量附魔每增加一级，该值增加0.5。只要带有力量附魔，就额外增加0.5（因此，力量I额外给予1.0，而力量II额外给予1.5）。 */
	damage?: double,
	/** 当前抛射物是否插入地面或已经触地（为箭的捡拾准备；浮在空中的箭无法被捡起）。 */
	inGround?: boolean,
	/** 箭是否会造成暴击。 */
	crit?: boolean,
	/** 箭是否来自一把弩。 */
	ShotFromCrossbow?: boolean,
	/** 箭能射穿实体的时间长度。 */
	PierceLevel?: byte,
	/** 击中方块或生物时触发的声音事件，为三叉戟保存但未应用，将此项设为自定义声音事件会使服务器崩溃。 */
	SoundEvent?: string,
	OwnerUUIDMost?: long,
	OwnerUUIDLeast?: long,
}

/** 拾取枚举值 */
export enum PickupKind {
	None = 0,
	Any = 1,
	Creative = 2
}

/** 箭id */
export type ArrowId = 'arrow'
export interface Arrow extends ArrowBase {
	/** 箭id */
	id: ArrowId,
	/** 用于箭实体，显示箭的自定义药水颜色。红<<16 + 绿<<8 + 蓝 */
	Color?: int,
	/** 当前药水或药箭所含有的自定义状态效果。 */
	CustomPotionEffects?: PotionEffect[],
	/** 默认药水效果的名称 */
	Potion?: string,
	/** 当前物品使用这项自定义颜色，范围效果云、箭、喷溅与滞留药水会使用该值作为其颗粒效果颜色。 */
	CustomPotionColor?: int,
}

/** 光灵箭id */
export type SpectralArrowId = 'spectral_arrow'
export interface SpectralArrow extends ArrowBase {
	/** 光灵箭id */
	id: SpectralArrowId,
	/** 发光效果的持续时间，以刻为单位。 */
	Duration?: int,
}

/** 三叉戟id */
export type TridentId = 'trident'
export interface Trident extends ArrowBase {
	/** 三叉戟id */
	id: TridentId,
	Trident?: InventoryItem,
}
