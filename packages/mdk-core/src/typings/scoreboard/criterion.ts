
import { EntityId, ItemId, ColorType } from 'mdk-nbt'

export type Criteria = 
    | SingleCriteria
    | TeamKillCriteria
    | KilledByTeamCriteria
    | CustomCriteria

type SingleCriteria = 
    | 'dummy'           /** 虚拟型 */
    | 'trigger'         /** 触发器 */
    | 'deathCount'      /** 死亡次数 */
    | 'playerKillCount' /** 杀死玩家总量 */
    | 'totalKillCount'  /** 杀死生物总量 */
    | 'health'          /** 生命值 */
    | 'xp'              /** 经验值 */
    | 'level'           /** 等级 */
    | 'food'            /** 饱和度 */
    | 'air'             /** 空气值 */
    | 'armor'           /** 盔甲值 */

type TeamKillCriteria = `teamkill.${ColorType}`
type KilledByTeamCriteria = `killedByTeam.${ColorType}`

type CustomCriteria = 
    | PickedUpCriteria
    | DroppedCriteria
    | UsedCriteria
    | BrokenCriteria
    | CraftedCriteria
    | MinedCriteria
    | KilledCriteria
    | KilledByCriteria

type PickedUpCriteria = `minecraft.custom.minecraft.picked_up:${ItemId}`
type DroppedCriteria = `minecraft.custom.minecraft.dropped:${ItemId}`
type UsedCriteria = `minecraft.custom.minecraft.used:${ItemId}`
type BrokenCriteria = `minecraft.custom.minecraft.broken:${ItemId}`
type CraftedCriteria = `minecraft.custom.minecraft.crafted:${ItemId}`
type MinedCriteria = `minecraft.custom.minecraft.mined:${ItemId}`
type KilledCriteria = `minecraft.custom.minecraft.killed:${EntityId}`
type KilledByCriteria = `minecraft.custom.minecraft.killed_by:${EntityId}`