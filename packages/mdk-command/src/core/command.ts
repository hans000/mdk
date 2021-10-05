import { WhiteList, Title, Team, Advancement, Attribute, Bossbar, Data, Datapack, Effect, Execute, Experience, Forceload, GameRule, Loot, Recipe, ReplaceItem, Schedule, Time, Trigger, Weather, WorldBorder, Tag, Scoreboard } from '../class/context'
import { BanTargetType } from '../function/ban'
import { CloneMode, MaskMode } from '../function/clone'
import { ActionType } from '../function/debug'
import { FillMode } from '../function/fill'
import { ParticleIdType, VisibleMode } from '../function/particle'
import { SaveType } from '../function/save'
import { SetblockMode } from '../function/setblock'
import { Selector, useFile, File, Criteria, LiteralType, TextToken } from 'mdk-core'
import { BiomeId, double, EnchantmentId, Entity, float, GameMode, int, SoundType, StructureType } from 'mdk-nbt'
import { BlockItemId } from 'mdk-nbt/dist/item/__'
import * as _ from '../function/index'
import { Objective } from '@/core/objective'

export class Command {
    readonly #target: Selector
    readonly #file: File

    constructor(target = new Selector()) {
        this.#target = target
        this.#file = useFile() as File
    }

    public get tag() {
        return new Tag(this.#file, this.#target)
    }

    public get attribute() {
        return new Attribute(this.#file)
    }

    public get loot() {
        return new Loot(this.#file)
    }

    public get forceload() {
        return new Forceload(this.#file)
    }

    public get advancement() {
        return new Advancement(this.#file)
    }
   
    public get execute() {
        return new Execute(this.#file)
    }
   
    public get worldborder() {
        return new WorldBorder(this.#file)
    }
  
    public get whitelist() {
        return new WhiteList(this.#file)
    }
   
    public get weather() {
        return new Weather(this.#file)
    }

    public get trigger() {
        return new Trigger(this.#file)
    }
 
    public get title() {
        return new Title(this.#file)
    }
 
    public get time() {
        return new Time(this.#file)
    }
  
    public get team() {
        return new Team(this.#file)
    }
  
    public get bossbar() {
        return new Bossbar(this.#file)
    }
  
    public get datapack() {
        return new Datapack(this.#file)
    }
  
    public get effect() {
        return new Effect(this.#file)
    }
   
    public get experience() {
        return new Experience(this.#file)
    }
  
    public get gamerule() {
        return new GameRule(this.#file)
    }
  
    public get recipe() {
        return new Recipe(this.#file)
    }
 
    public get replaceitem() {
        return new ReplaceItem(this.#file)
    }
  
    public get schedule() {
        return new Schedule(this.#file)
    }
 
    public get data() {
        return new Data(this.#file)
    }
    public scoreboard(objective: Objective) {
        return new Scoreboard(this.#file, objective)
    }

    public objective(name: string, criterion: Criteria = 'dummy', displayName?: string) {
        return new Objective({ name, criterion, displayName }, this.#target)
    }

    public clear(item: string, maxCount: int) {
        this.#file.add(_.clear(this.#target, item, maxCount))
    }

    public clone(from: string, to: string, dist: string): void
    public clone(from: string, to: string, dist: string, maskMode: MaskMode): void
    public clone(from: string, to: string, dist: string, maskMode: MaskMode, cloneMode: CloneMode): void
    public clone(from: string, to: string, dist: string, maskMode: MaskMode, cloneMode: CloneMode, blockId: string): void
    public clone(from: string, to: string, dist: string, arg?: MaskMode, arg2?: CloneMode): void {
        this.#file.add(_.clone(from, to, dist, arg, arg2))
    }

    public debug(action: ActionType) {
        this.#file.add(_.debug(action))
    }

    public defaultgamemode(mode: GameMode) {
        this.#file.add(_.defaultgamemode(mode))
    }

    public deop(player: Selector) {
        this.#file.add(_.deop(player))
    }

    public difficulty(mode: GameMode) {
        this.#file.add(_.difficulty(mode))
    }

    public enchant(enchantId: EnchantmentId, level: int) {
        this.#file.add(_.enchant(this.#target, enchantId, level))
    }

    public fill(from: string, to: string, blockId: BlockItemId): void
    public fill(from: string, to: string, blockId: BlockItemId, mode: FillMode): void
    public fill(from: string, to: string, blockId: BlockItemId, replaceBlockId: string): void
    public fill(from: string, to: string, blockId: BlockItemId, arg?: FillMode | string) {
        this.#file.add(_.fill(from, to, blockId, arg))
    }

    public gamemode(mode: GameMode) {
        this.#file.add(_.gamemode(mode, this.#target))
    }

    public kick(reason?: string) {
        this.#file.add(_.kick(this.#target, reason))
    }

    
    public kill() {
        this.#file.add(_.kill(this.#target))
    }

    public locate(structure: StructureType) {
        this.#file.add(structure)
    }

    public msg(message: string) {
        this.#file.add(_.msg(this.#target, message))
    }

    public op(player: Selector) {
        this.#file.add(_.op(player))
    }

    public pardon(name: string) {
        this.#file.add(_.pardon(name))
    }

    public pardonIp(ip: string) {
        this.#file.add(_.pardonIp(ip))
    }

    public particle(particleId: ParticleIdType, location: string): void
    public particle(particleId: ParticleIdType, location: string, delta: string): void
    public particle(particleId: ParticleIdType, location: string, delta: string, speed: double): void
    public particle(particleId: ParticleIdType, location: string, delta: string, speed: double, count: int): void
    public particle(particleId: ParticleIdType, location: string, delta: string, speed: double, count: int, mode: VisibleMode): void
    public particle(particleId: ParticleIdType, location?: string, delta?: string, speed?: double, count?: int, mode?: VisibleMode) {
        this.#file.add(_.particle(particleId, location, delta, speed, count, mode, this.#target))
    }

    public playsound(soundPath: string, source: string): void
    public playsound(soundPath: string, source: string, location: string): void
    public playsound(soundPath: string, source: string, location: string, volume: float): void
    public playsound(soundPath: string, source: string, location: string, volume: float, tone: float): void
    public playsound(soundPath: string, source: string, location: string, volume: float, tone: float, minVolume: float): void
    public playsound(soundPath: string, source: string, location?: string, volume?: float, tone?: float, minVolume?: float) {
        this.#file.add(_.playsound(soundPath, source, this.#target, location, volume, tone, minVolume))
    }

    public publish(port?: string) {
        this.#file.add(_.publish(port))
    }

    public seed() {
        this.#file.add(_.seed())
    }

    public setblock(location: string, blockId: string): void
    public setblock(location: string, blockId: string, mode: SetblockMode): void
    public setblock(location: string, blockId: string, arg?: SetblockMode) {
        this.#file.add(_.setblock(location, blockId, arg))
    }

    public setidletimeout(minute: int) {
        this.#file.add(_.setidletimeout(minute))
    }

    public setworldspawn(location?: string) {
        this.#file.add(_.setworldspawn(location))
    }

    public spawnpoint(location: string) {
        this.#file.add(_.spawnpoint(this.#target, location))
    }

    public spreadplayers(location: string, spreadDistance: float, maxRange: float, respectTeams: boolean) {
        this.#file.add(_.spreadplayers(location, spreadDistance, maxRange, respectTeams, this.#target))
    }

    public stop() {
        this.#file.add(_.stop())
    }

    public stopsound(source: string):void
    public stopsound(source: SoundType, soundPath: string):void
    public stopsound(source?: SoundType, soundPath?: string) {
        this.#file.add(_.stopsound(this.#target, source, soundPath))
    }

    public summon(nbt: Entity, location = '~ ~ ~') {
        this.#file.add(_.summon(nbt, location))
    }

    public teammsg(message: string) {
        this.#file.add(_.teammsg(message))
    }

    public say(message: string) {
        this.#file.add(_.say(message))
    }

    public tm(message: string) {
        this.#file.add(_.tm(message))
    }

    public teleport(destination: Selector, rotation?: string): void
    public teleport(location: string): void
    public teleport(arg2: any, arg3?: string) {
        this.#file.add(_.teleport(this.#target, arg2, arg3))
    }

    public tell(message: string) {
        this.#file.add(_.tell(this.#target, message))
    }

    public tp(destination: Selector, rotation?: string): void
    public tp(location: string): void
    public tp(arg2: any, arg3?: string) {
        this.#file.add(_.tp(this.#target, arg2, arg3))
    }

    public w(msg: string) {
        this.#file.add(_.w(this.#target, msg))
    }

    public $function(name: string) {
        this.#file.add(_.$function(name))
    }

    public ban(reason?: string) {
        this.#file.add(_.ban(this.#target, reason))
    }

    public banIp(ip: string, reason?: string) {
        this.#file.add(_.banIp(ip, reason))
    }

    public banList(type?: BanTargetType) {
        this.#file.add(_.banList(type))
    }

    public list(uuids?: string) {
        this.#file.add(_.list(uuids))
    }

    public locatebiome(biomeId: BiomeId) {
        this.#file.add(_.locatebiome(biomeId))
    }

    public me(msg: string) {
        this.#file.add(_.me(msg))
    }

    public reload() {
        this.#file.add(_.reload())
    }

    public save(type: SaveType) {
        this.#file.add(_.save(type))
    }

    public saveAll() {
        this.#file.add(_.saveAll())
    }

    public saveOn() {
        this.#file.add(_.saveOn())
    }

    public saveOff() {
        this.#file.add(_.saveOff())
    }

    public tellraw(json: LiteralType<TextToken[]>) {
        this.#file.add(_.tellraw(this.#target, json))
    }
    
    public spectate(player: string) {
        this.#file.add(_.spectate(this.#target, player))
    }
}
