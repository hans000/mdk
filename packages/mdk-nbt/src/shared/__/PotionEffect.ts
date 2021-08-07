import { byte, int } from "./numberic";

export interface PotionEffect {
    /** 效果的数字ID */
    id: byte
    /** 效果的倍率，等级1的值为0 */
    Amplifier?: byte
    /** 效果的持续时长刻数 */
    Duration?: int
    /** 如果效果由信标施加，那么为true，使效果在屏幕上不会那么显眼 */
    Ambient?: boolean
    /** 粒子效果 */
    ShowParticles?: boolean
    /** 效果图标 */
    ShowIcon?: boolean
}