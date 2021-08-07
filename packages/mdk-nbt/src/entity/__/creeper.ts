import { MobBase } from "./shared";
import { byte, short } from "@shared/__/numberic";

/**
 * 苦力爬nbt标签
 */
export interface Creeper extends Omit<MobBase, 'id'> {
    id: CreeperId,
    /** 是否为闪电苦力怕 */
    powered?: boolean,
    /** 爆炸半径。默认3 */
    ExplosionRadius?: byte,
    /** 爆炸倒计时。默认30 */
    Fuse?: short,
    /** 是否被点燃 */
    ignited?: boolean,
}

/** 苦力爬id */
export type CreeperId = 'creeper'