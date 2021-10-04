import { int } from 'mdk-nbt'

export default {
    announceAdvancements,
    commandBlockOutput,
    disableElytraMovementCheck,
    disableRaids,
    doDaylightCycle,
    doEntityDrops,
    doFireTick,
    doInsomnia,
    doImmediateRespawn,
    doLimitedCrafting,
    doMobLoot,
    doMobSpawning,
    doPatrolSpawning,
    doTileDrops,
    doTraderSpawning,
    doWeatherCycle,
    drowningdamage,
    falldamage,
    firedamage,
    forgiveDeadPlayers,
    freezeDamage,
    keepInventory,
    logAdminCommands,
    maxCommandChainLength,
    maxEntityCramming,
    mobGriefing,
    naturalRegeneration,
    playersSleepingPercentage,
    randomTickSpeed,
    reducedDebugInfo,
    sendCommandFeedback,
    showDeathMessages,
    spawnRadius,
    spectatorsGenerateChunks,
    universalAnger,
}

/**
 * 是否在聊天框中公告玩家进度的达成
 * @param active 是否激活
 */
function announceAdvancements(active: boolean) {
    return `gamerule announceAdvancements ${active}`
}
/**
 * 命令方块执行命令时是否在聊天框中向管理员显示
 * @param active 是否激活
 */
function commandBlockOutput(active: boolean) {
    return `gamerule commandBlockOutput ${active}`
}
/**
 * 是否让服务器停止检查使用鞘翅玩家的移动速度。
 * @param active 是否激活
 */
function disableElytraMovementCheck(active: boolean) {
    return `gamerule disableElytraMovementCheck ${active}`
}
/**
 * 是否禁用袭击。
 * @param active 是否激活
 */
function disableRaids(active: boolean) {
    return `gamerule disableRaids ${active}`
}
/**
 * 是否进行日夜交替和月相变化。
 * @param active 是否激活
 */
function doDaylightCycle(active: boolean) {
    return `gamerule doDaylightCycle ${active}`
}
/**
 * 非生物实体是否掉落物品。
 * @param active 是否激活
 */
function doEntityDrops(active: boolean) {
    return `gamerule doEntityDrops ${active}`
}
/**
 * 火是否蔓延及自然熄灭。
 * @param active 是否激活
 */
function doFireTick(active: boolean) {
    return `gamerule doFireTick ${active}`
}
/**
 * 幻翼是否在夜晚生成。
 * @param active 是否激活
 */
function doInsomnia(active: boolean) {
    return `gamerule doInsomnia ${active}`
}
/**
 * 玩家死亡时是否不显示死亡界面直接重生
 * @param active 是否激活
 */
function doImmediateRespawn(active: boolean) {
    return `gamerule doImmediateRespawn ${active}`
}
/**
 * 玩家的合成配方是否需要解锁才能使用。
 * @param active 是否激活
 */
function doLimitedCrafting(active: boolean) {
    return `gamerule doLimitedCrafting ${active}`
}
/**
 * 生物在死亡是否掉落物品。
 * @param active 是否激活
 */
function doMobLoot(active: boolean) {
    return `gamerule doMobLoot ${active}`
}
/**
 * 生物是否自然生成。不影响刷怪箱。
 * @param active 是否激活
 */
function doMobSpawning(active: boolean) {
    return `gamerule doMobSpawning ${active}`
}
/**
 * 控制灾厄巡逻队的生成。
 * @param active 是否激活
 */
function doPatrolSpawning(active: boolean) {
    return `gamerule doPatrolSpawning ${active}`
}
/**
 * 方块被破坏时是否掉落物品。
 * @param active 是否激活
 */
function doTileDrops(active: boolean) {
    return `gamerule doTileDrops ${active}`
}
/**
 * 控制流浪商人的生成。
 * @param active 是否激活
 */
function doTraderSpawning(active: boolean) {
    return `gamerule doTraderSpawning ${active}`
}
/**
 * 天气是否变化。
 * @param active 是否激活
 */
function doWeatherCycle(active: boolean) {
    return `gamerule doWeatherCycle ${active}`
}
/**
 * 玩家是否承受窒息伤害。
 * @param active 是否激活
 */
function drowningdamage(active: boolean) {
    return `gamerule drowningdamage ${active}`
}
/**
 * 玩家是否承受跌落伤害。
 * @param active 是否激活
 */
function falldamage(active: boolean) {
    return `gamerule falldamage ${active}`
}
/**
 * 玩家是否承受火焰伤害。
 * @param active 是否激活
 */
function firedamage(active: boolean) {
    return `gamerule firedamage ${active}`
}
/**
 * 当被激怒的中立生物的目标玩家死亡时，该生物是否恢复中立状态。
 * @param active 是否激活
 */
function forgiveDeadPlayers(active: boolean) {
    return `gamerule forgiveDeadPlayers ${active}`
}
/**
 * 玩家是否承受冰冻伤害
 * @param active 是否激活
 */
function freezeDamage(active: boolean) {
    return `gamerule freezeDamage ${active}`
}
/**
 * 玩家死亡后是否保留物品栏物品、经验（死亡时物品不掉落、经验不清空）。
 * @param active 是否激活
 */
function keepInventory(active: boolean) {
    return `gamerule keepInventory ${active}`
}
/**
 * 是否在服务器日志中记录管理员使用过的命令。
 * @param active 是否激活
 */
function logAdminCommands(active: boolean) {
    return `gamerule logAdminCommands ${active}`
}
/**
 * 决定了连锁型命令方块能“连锁”的总数量。
 * @param length 长度
 */
function maxCommandChainLength(length: int) {
    return `gamerule maxCommandChainLength ${length}`
}
/**
 * 玩家或生物能同时推动其他可推动实体的数量，超过此数量时将承受每半秒3（Heart.svgHalf Heart.svg）的窒息伤害。设置成0可以停用这个规则。
 * @param count 数量
 */
function maxEntityCramming(count: int) {
    return `gamerule maxEntityCramming ${count}`
}
/**
 * 生物是否能放置、修改或破坏方块，以及生物是否能捡拾物品。
 * @param active 是否激活
 */
function mobGriefing(active: boolean) {
    return `gamerule mobGriefing ${active}`
}
/**
 * 玩家是否能在饥饿值足够时自然恢复生命值（不影响外部治疗效果，如金苹果、生命恢复状态效果等）。
 * @param active 是否激活
 */
function naturalRegeneration(active: boolean) {
    return `gamerule naturalRegeneration ${active}`
}
/**
 * 设置跳过夜晚所需的入睡玩家所占百分比
 * @param count 百分比
 */
function playersSleepingPercentage(count: int) {
    return `gamerule playersSleepingPercentage ${count}`
}
/**
 * 每游戏刻每区段中随机的方块刻发生的频率（例如植物生长，树叶腐烂等）。为0时禁用随机刻，较高的数字将增大随机刻频率。
 * @param speed 速度
 */
function randomTickSpeed(speed: int) {
    return `gamerule randomTickSpeed ${speed}`
}
/**
 * 调试屏幕是否简化而非显示详细信息。
 * @param active 是否激活
 */
function reducedDebugInfo(active: boolean) {
    return `gamerule reducedDebugInfo ${active}`
}
/**
 * 玩家执行命令的返回信息是否在聊天框中显示。同时影响命令方块是否保存命令输出文本。
 * @param active 是否激活
 */
function sendCommandFeedback(active: boolean) {
    return `gamerule sendCommandFeedback ${active}`
}
/**
 * 是否在聊天框中显示玩家以及驯养宠物（狼、猫和鹦鹉）的死亡信息。
 * @param active 是否激活
 */
function showDeathMessages(active: boolean) {
    return `gamerule showDeathMessages ${active}`
}
/**
 * 	首次进入服务器的玩家和没有重生点的死亡玩家在重生时与世界重生点坐标的距离。
 * @param distance 长度
 */
function spawnRadius(distance: int) {
    return `gamerule spawnRadius ${distance}`
}
/**
 * 是否允许旁观模式的玩家生成区块。
 * @param active 是否激活
 */
function spectatorsGenerateChunks(active: boolean) {
    return `gamerule spectatorsGenerateChunks ${active}`
}
/**
 * 被激怒的中立生物是否攻击附近任何玩家
 * @param active 是否激活
 */
function universalAnger(active: boolean) {
    return `gamerule universalAnger ${active}`
}