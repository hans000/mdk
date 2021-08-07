import { Facing4, int } from "@/shared";
import { LootContainer } from "@shared/__/Container";

export type HopperId = 'hopper'

export interface HopperState {
    enabled: boolean
    facing: Facing4 | 'down'
}

export interface Hopper extends LootContainer {
    /** 距离下次运输的时间（单位：游戏刻），自然值在1-8之间，如果没有物品传输，则为0 */
    TransferCooldown: int
}