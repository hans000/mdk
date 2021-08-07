import { gamerule } from "../function"
import { File } from 'mdk-core';
import { int } from 'mdk-nbt';
import { ContextAbstract } from "mdk-core";

export class GameRule extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }
    public announceAdvancements(active: boolean) {
        this.context.add(gamerule.announceAdvancements(active))
    }

    public commandBlockOutput(active: boolean) {
        this.context.add(gamerule.commandBlockOutput(active))
    }

    public disableElytraMovementCheck(active: boolean) {
        this.context.add(gamerule.disableElytraMovementCheck(active))
    }

    public disableRaids(active: boolean) {
        this.context.add(gamerule.disableRaids(active))
    }

    public doDaylightCycle(active: boolean) {
        this.context.add(gamerule.doDaylightCycle(active))
    }

    public doEntityDrops(active: boolean) {
        this.context.add(gamerule.doEntityDrops(active))
    }

    public doFireTick(active: boolean) {
        this.context.add(gamerule.doFireTick(active))
    }

    public doInsomnia(active: boolean) {
        this.context.add(gamerule.doInsomnia(active))
    }

    public doImmediateRespawn(active: boolean) {
        this.context.add(gamerule.doImmediateRespawn(active))
    }

    public doLimitedCrafting(active: boolean) {
        this.context.add(gamerule.doLimitedCrafting(active))
    }

    public doMobLoot(active: boolean) {
        this.context.add(gamerule.doMobLoot(active))
    }

    public doMobSpawning(active: boolean) {
        this.context.add(gamerule.doMobSpawning(active))
    }

    public doPatrolSpawning(active: boolean) {
        this.context.add(gamerule.doPatrolSpawning(active))
    }

    public doTileDrops(active: boolean) {
        this.context.add(gamerule.doTileDrops(active))
    }

    public doTraderSpawning(active: boolean) {
        this.context.add(gamerule.doTraderSpawning(active))
    }

    public doWeatherCycle(active: boolean) {
        this.context.add(gamerule.doWeatherCycle(active))
    }

    public drowningdamage(active: boolean) {
        this.context.add(gamerule.drowningdamage(active))
    }

    public falldamage(active: boolean) {
        this.context.add(gamerule.falldamage(active))
    }

    public firedamage(active: boolean) {
        this.context.add(gamerule.firedamage(active))
    }

    public keepInventory(active: boolean) {
        this.context.add(gamerule.keepInventory(active))
    }

    public logAdminCommands(active: boolean) {
        this.context.add(gamerule.logAdminCommands(active))
    }

    public maxCommandChainLength(length: int) {
        this.context.add(gamerule.maxCommandChainLength(length))
    }

    public maxEntityCramming(count: int) {
        this.context.add(gamerule.maxEntityCramming(count))
    }

    public mobGriefing(active: boolean) {
        this.context.add(gamerule.mobGriefing(active))
    }

    public naturalRegeneration(active: boolean) {
        this.context.add(gamerule.naturalRegeneration(active))
    }

    public randomTickSpeed(speed: number) {
        this.context.add(gamerule.randomTickSpeed(speed))
    }

    public reducedDebugInfo(active: boolean) {
        this.context.add(gamerule.reducedDebugInfo(active))
    }

    public sendCommandFeedback(active: boolean) {
        this.context.add(gamerule.sendCommandFeedback(active))
    }

    public showDeathMessages(active: boolean) {
        this.context.add(gamerule.showDeathMessages(active))
    }

    public spawnRadius(distance: number) {
        this.context.add(gamerule.spawnRadius(distance))
    }

    public spectatorsGenerateChunks(active: boolean) {
        this.context.add(gamerule.spectatorsGenerateChunks(active))
    }
}