import { EntityBase } from "./shared";
import { int, long, float } from "@shared/__/numberic";
import { PotionEffect } from "@shared/__/PotionEffect";

export type EffectCloudId = 'area_effect_cloud'
export interface EffectCloud extends EntityBase {
	/** 实体id */
	id: EffectCloudId,
	/** 效果区域的已持续时间。 */
	Age?: int,
	/** 效果区域颗粒的颜色。 */
	Color?: int,
	/** 效果区域的最长持续时间。效果区域的持续时间超过此值时消失，无论其半径为何。 */
	Duration?: int,
	/** 再次施加状态效果的冷却倒计时，以刻为单位。 */
	ReapplicationDelay?: int,
	/** 效果区域生效前的等待时间。在已持续时间未到达此时间前，效果区域不施加状态效果。 */
	WaitTime?: int,
	/** 施加状态效果后对效果区域持续时间的改变量。 */
	DurationOnUse?: int,
	/** 效果区域拥有者通用唯一标识符（UUID）的高位，与高位组合成一个完整的UUID。 */
	OwnerUUIDMost?: long,
	/** 效果区域拥有者通用唯一标识符（UUID）的高位，与低位组合成一个完整的UUID。 */
	OwnerUUIDLeast?: long,
	/** 效果区域的半径。 */
	Radius?: float,
	/** 施加状态效果后效果区域半径的改变量。正常情况下为负值。 */
	RadiusOnUse?: float,
	/** 效果区域半径每刻的改变量。正常情况下为负值。 */
	RadiusPerTick?: float,
	/** 组成效果区域的颗粒。 */
	Particle?: string,
	/** 默认药水效果的名称， */
	Potion?: string,
	Effects?: PotionEffect[]
}