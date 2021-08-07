import { int, long } from "@shared/__";

/**
 * 可繁殖生物nbt标签
 */
export interface Breedable {
    /** 生物id */
    id: BreedableId,
    /** 距离生物失去繁衍意愿而停止寻找伴侣的时间刻数。停止寻找伴侣时为0。 */
    InLove?: int[],
    /** 表示生物的年龄刻数；生物为幼体是为负值。生物为成体时，此值大于等于0。大于0时，还表示距离生物能再次繁衍的时间刻数。 */
    Age?: int,
    /** 生物成年后将被赋予的年龄值。当幼体生物被喂养后增大。 */
    ForcedAge?: int,
    /** 用于识别引起当前生物繁衍的实体，此项记录那个实体的通用唯一识别码最低比特位。 */
    LoveCauseMost?: long,
    /** 用于识别引起当前生物繁衍的实体，此项记录那个实体的通用唯一识别码最高比特位。 */
    LoveCauseLeast?: long,
}

export type BreedableId = 'cow' | 'polar_bear' | 'hoglin'