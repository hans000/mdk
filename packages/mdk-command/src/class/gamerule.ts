import { gamerule } from "../function"
import { File } from 'mdk-core';
import { ContextAbstract } from "mdk-core";

export class GameRule extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }
    /**
     * 是否在聊天框中公告玩家进度的达成，默认true
     */
    public announceAdvancements(active = true) {
        this.context.add(gamerule.announceAdvancements(active))
        return this
    }

    /**
     * 命令方块执行命令时是否在聊天框中向管理员显示，默认true
     */
     public commandBlockOutput(active = true) {
        this.context.add(gamerule.commandBlockOutput(active))
        return this
    }

    /**
     * 是否让服务器停止检查使用鞘翅玩家的移动速度，默认false
     */
    public disableElytraMovementCheck(active = false) {
        this.context.add(gamerule.disableElytraMovementCheck(active))
        return this
    }

    /**
     * 是否禁用袭击，默认false
     */
    public disableRaids(active = false) {
        this.context.add(gamerule.disableRaids(active))
        return this
    }

    /**
     * 是否进行日夜交替和月相变化，默认true
     */
    public doDaylightCycle(active = true) {
        this.context.add(gamerule.doDaylightCycle(active))
        return this
    }

    /**
     * 非生物实体是否掉落物品，默认true
     */
    public doEntityDrops(active = true) {
        this.context.add(gamerule.doEntityDrops(active))
        return this
    }

    /**
     * 火是否蔓延及自然熄灭，默认true
     */
    public doFireTick(active = true) {
        this.context.add(gamerule.doFireTick(active))
        return this
    }

    /**
     * 幻翼是否在夜晚生成，默认true
     */
    public doInsomnia(active = true) {
        this.context.add(gamerule.doInsomnia(active))
        return this
    }

    /**
     * 玩家的合成配方是否需要解锁才能使用，默认false
     */
    public doImmediateRespawn(active = false) {
        this.context.add(gamerule.doImmediateRespawn(active))
        return this
    }

    /**
     * 玩家的合成配方是否需要解锁才能使用，默认false
     */
    public doLimitedCrafting(active = false) {
        this.context.add(gamerule.doLimitedCrafting(active))
        return this
    }

    /**
     * 生物在死亡时是否掉落物品，默认true
     */
    public doMobLoot(active = true) {
        this.context.add(gamerule.doMobLoot(active))
        return this
    }

    /**
     * 生物是否自然生成。不影响刷怪笼，默认true
     */
    public doMobSpawning(active = true) {
        this.context.add(gamerule.doMobSpawning(active))
        return this
    }

    /**
     * 控制灾厄巡逻队的生成，默认true
     */
    public doPatrolSpawning(active = true) {
        this.context.add(gamerule.doPatrolSpawning(active))
        return this
    }

    /**
     * 方块被破坏时是否掉落物，默认true
     */
    public doTileDrops(active = true) {
        this.context.add(gamerule.doTileDrops(active))
        return this
    }

    /**
     * 控制流浪商人的生成，默认true
     */
    public doTraderSpawning(active = true) {
        this.context.add(gamerule.doTraderSpawning(active))
        return this
    }

    /**
     * 天气是否变化，默认true
     */
    public doWeatherCycle(active = true) {
        this.context.add(gamerule.doWeatherCycle(active))
        return this
    }

    /**
     * 玩家是否承受窒息伤害，默认true
     */
    public drowningdamage(active = true) {
        this.context.add(gamerule.drowningdamage(active))
        return this
    }

    /**
     * 玩家是否承受跌落伤害，默认true
     */
    public falldamage(active = true) {
        this.context.add(gamerule.falldamage(active))
        return this
    }

    /**
     * 玩家是否承受火焰伤害，默认true
     */
    public firedamage(active = true) {
        this.context.add(gamerule.firedamage(active))
        return this
    }

    /**
     * 当被激怒的中立生物的目标玩家死亡时，该生物是否恢复中立状态，默认true
     */
    public forgiveDeadPlayers(active = true) {
        this.context.add(gamerule.forgiveDeadPlayers(active))
        return this
    }

    /**
     * 玩家是否承受冰冻伤害，默认true
     */
    public freezeDamage(active = true) {
        this.context.add(gamerule.freezeDamage(active))
        return this
    }
    
    /**
     * 玩家死亡后是否保留物品栏物品、经验（死亡时物品不掉落、经验不清空），默认false
     */
     public keepInventory(active = false) {
        this.context.add(gamerule.keepInventory(active))
        return this
    }

    /**
     * 是否在服务器日志中记录管理员使用过的命令，默认true
     */
    public logAdminCommands(active = true) {
        this.context.add(gamerule.logAdminCommands(active))
        return this
    }

    /**
     * 决定了连锁型命令方块能连锁执行的总数量，默认65536
     */
    public maxCommandChainLength(length = 65536) {
        this.context.add(gamerule.maxCommandChainLength(length))
        return this
    }

    /**
     * 玩家或生物能同时推动其他可推动实体的数量，默认24
     */
    public maxEntityCramming(count = 24) {
        this.context.add(gamerule.maxEntityCramming(count))
        return this
    }

    /**
     * 生物是否能够进行破坏性行为，默认true
     */
    public mobGriefing(active = true) {
        this.context.add(gamerule.mobGriefing(active))
        return this
    }

    /**
     * 玩家是否能在饥饿值足够时自然恢复生命值，默认true
     */
    public naturalRegeneration(active = true) {
        this.context.add(gamerule.naturalRegeneration(active))
        return this
    }

    /**
     * 设置跳过夜晚所需的入睡玩家所占百分比，默认100
     * * 设置为0时，1个玩家入睡即可跳过夜晚
     * * 设置为大于100的值会使玩家无法通过入睡跳过夜晚。
     */
     public playersSleepingPercentage(count = 100) {
        this.context.add(gamerule.playersSleepingPercentage(count))
        return this
    }

    /**
     * 每游戏刻每区段中随机的方块刻发生的频率，默认3
     */
    public randomTickSpeed(speed = 3) {
        this.context.add(gamerule.randomTickSpeed(speed))
        return this
    }

    /**
     * 调试屏幕是否简化而非显示详细信息，默认false
     */
    public reducedDebugInfo(active = false) {
        this.context.add(gamerule.reducedDebugInfo(active))
        return this
    }

    /**
     * 玩家执行命令的返回信息是否在聊天框中显示，默认true
     */
    public sendCommandFeedback(active = true) {
        this.context.add(gamerule.sendCommandFeedback(active))
        return this
    }

    /**
     * 是否在聊天框中显示玩家的死亡信息，默认true
     */
    public showDeathMessages(active = true) {
        this.context.add(gamerule.showDeathMessages(active))
        return this
    }

    /**
     * 首次进入服务器的玩家和没有重生点的死亡玩家在重生时与世界重生点坐标的距离，默认10
     */
    public spawnRadius(distance = 10) {
        this.context.add(gamerule.spawnRadius(distance))
        return this
    }

    /**
     * 是否允许旁观模式的玩家生成区块，默认true
     */
    public spectatorsGenerateChunks(active = true) {
        this.context.add(gamerule.spectatorsGenerateChunks(active))
        return this
    }

    /**
     * 是否允许旁观模式的玩家生成区块，默认false
     */
    public universalAnger(active = false) {
        this.context.add(gamerule.universalAnger(active))
        return this
    }
}