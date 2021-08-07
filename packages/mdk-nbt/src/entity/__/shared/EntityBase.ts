import { EntityId } from "@/entity";
import { DimensionKind } from "@shared/constants";
import { double, float, short, int, long } from "@shared/__";

/**
 * 实体基本nbt标签
 */
export interface EntityBase {
    /** 生物id */
    id: EntityId;
    /** 记录当前实体X、Y、Z坐标 */
    Pos?: [double, double, double];
    /** 记录当前实体dX、dY、dZ速度向量 */
    Motion?: [double, double, double];
    /** 记录旋转角度 */
    Rotation?: [float, float];
    /** 当前实体已经坠落的距离。值越大，实体落地时对其造成伤害更多。 */
    FallDistance?: float;
    /** 距离火熄灭剩余的时间刻数。负值表示当前实体能够在火中站立而不着火的时间。未着火时默认为-20。 */
    Fire?: short;
    /** 当前实体所剩的空气值。在空气中充满至300 */
    Air?: short;
    /** 实体接触地面时为true */
    OnGround?: boolean;
    /** 如果为true，实体在空中不会坠落 */
    NoGravity?: boolean;
    /** 用于保存玩家上次所在的维度 */
    Dimension?: DimensionKind,
    /** 如果为true，那么当前实体不会受到任何伤害。 */
    Invulnerable?: boolean;
    /** 距离当前实体可以再次穿过下界传送门向回传送的时间刻数。在初次传送后，起始值为300刻（15秒）并逐渐倒计时至0。 */
    PortalCooldown?: int;
    /** 当前实体的通用唯一识别码最高比特位。 */
    UUIDMost?: long;
    /** 当前实体的通用唯一识别码最低比特位。 */
    UUIDLeast?: long;
    /** 当前实体的自定义名称JSON文本组件。 */
    CustomName?: string;
    /** 如果为true，而且实体拥有自定义名称 */
    CustomNameVisible?: boolean;
    /** 如果为true，那么当前实体不会发出任何声音。 */
    Silent?: boolean;
    /** 正在骑乘当前实体的实体的数据。 */
    Passengers?: string[];
    /** 如果为true，那么实体会有发光的轮廓线。 */
    Glowing?: boolean;
    /** 自定义的记分板标签数据。 */
    Tags?: string[];
}