import { float, short, int, UUID } from "@shared/__";
import { EntityBase } from "./EntityBase";

export interface Brain {
    memories: Record<string, string>; // Memories; // TODO
}
// export interface AttributeModifier {
//     Name: string;
//     Slot: string;
//     Operation: string;
// }
export interface UUIDLeash {
    UUID: UUID;
}
export interface BlockLeash {
    /** 拴绳连接到的栅栏的X坐标。 */
    x: string;
    /** 拴绳连接到的栅栏的Y坐标。 */
    y: string;
    /** 拴绳连接到的栅栏的Z坐标。 */
    z: string;
}

/**
 * 具有生命值的实体nbt标签
 */
export interface LivingEntity extends EntityBase {
    /** 生命值 */
    Health?: float;
    /** 通过伤害吸收效果得到的额外生命值 */
    AbsorbtionAmount?: float;
    /** 距离生物被击中后发红的时间刻数。0表示最近未被击中 */
    HurtTime?: short;
    /** 生物上次被伤害的时间，以距离生物被创建的时间为准 */
    HurtByTimestamp?: int;
    /** 距离生物死亡的时间刻数。控制死亡动画。存活时为0。 */
    DeathTime?: short;
    /** 实体像胸甲栏有鞘翅般滑翔 */
    FallFlying?: boolean;
    /** 该实体正在睡觉的床的X坐标 */
    SleepingX?: int;
    /** 该实体正在睡觉的床的Y坐标 */
    SleepingY?: int;
    /** 该实体正在睡觉的床的Z坐标 */
    SleepingZ?: int;
    /** 该实体需要记住的所有信息。 */
    Brain?: Brain;
    /** 当前生物的属性的列表。属性被用于多处内部计算，可以当作是一种生物的“统计信息”。 */
    Attributes?: string[];
    /** 该生物的状态效果的列表。 */
    ActiveEffects?: string[];
    /** 生物的AI。 */
    NoAI?: boolean;
    /** 此项使得生物立刻加入该名称的队伍。 */
    Team?: string;
}