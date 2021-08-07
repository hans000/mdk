import { byte, int } from "@/shared";
import { Container } from "@shared/__/Container";

export type BrewingStandId = 'brewing_stand'

export interface BrewingStand extends Container {
    /** 酿造药水剩余的所需时间的刻数 */
    BrewTime: int
    /** 酿造台的剩余能量 */
    Fuel: byte
}