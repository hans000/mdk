import { LivingEntity } from "./shared";
import { int, float } from "@shared/__/numberic";

/** 盔甲架id */
export type ArmorStandId = 'armor_stand'
/**
 * 盔甲架nbt标签
 */
export interface ArmorStand extends LivingEntity {
	/** 实体id */
	id: ArmorStandId,
	/**  如果为true，盔甲架的尺寸会被设置为0，碰撞箱也会变得很小很小，小到难以以/kill指令外的方式破坏。 */
	Marker?: boolean,
	/** 如果为true，盔甲架不会显示下面的基座。 */
	NoBasePlate?: boolean,
	/** 如果为true, 盔甲架会隐形，不会被破坏 */
	ShowArms?: boolean,
	/** 如果为 true, 盔甲架会变得很小，和小僵尸类似。 */
	Small?: boolean,
	/** 用于禁用某个部位的放置、替换和移除。手持为1，脚部为2，腿部为4，上身为8，头部为16。禁用移除和替换就把该部位数值*256,禁用放置就把该部位数值*69632。 */
	DisabledSlots?: int,
	/** 盔甲架的不同部位的旋转角度 */
	Pose?: Pose
}

/** 盔甲架部位nbt标签 */
export interface Pose {
	/** 身体的角度 */
	Body?: [float, float, float],
	/** 左手的角度 */
	LeftArm?: [float, float, float],
	/** 右手的角度 */
	RightArm?: [float, float, float],
	/** 左腿的角度 */
	LeftLeg?: [float, float, float],
	/** 右腿的角度 */
	RightLeg?: [float, float, float],
	/** 头部的角度 */
	Head?: [float, float, float]
}