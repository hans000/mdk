import { WhiteList, Title, Team, Advancement, Attribute, Bossbar, Data, Datapack, Effect, Execute, Experience, Forceload, GameRule, Loot, Recipe, ReplaceItem, Schedule, Time, Trigger, Weather, WorldBorder, Tag, Scoreboard } from '../class/context'
import { BanTargetType } from '../function/ban'
import { CloneMode, MaskMode } from '../function/clone'
import { ActionType } from '../function/debug'
import { FillMode } from '../function/fill'
import { ParticleIdType, VisibleMode } from '../function/particle'
import { SaveType } from '../function/save'
import { SetblockMode } from '../function/setblock'
import { Selector, useFile, File, Criteria, LiteralType, TextToken, ContextAbstract } from 'mdk-core'
import { BiomeId, double, EnchantmentId, Entity, float, GameMode, int, SoundType, StructureType } from 'mdk-nbt'
import { BlockItemId } from 'mdk-nbt/dist/item/__'
import * as _ from '../function/index'
import { Objective } from '@/core/objective'

export class Command extends ContextAbstract {
    readonly #target: Selector

    constructor(target = new Selector()) {
        super(useFile() as File)
        this.#target = target
    }

    public get tag() {
        return new Tag(this.context, this.#target)
    }

    public get attribute() {
        return new Attribute(this.context)
    }

    public get loot() {
        return new Loot(this.context)
    }

    public get forceload() {
        return new Forceload(this.context)
    }

    public get advancement() {
        return new Advancement(this.context)
    }
   
    public get execute() {
        return new Execute(this.context)
    }
   
    public get worldborder() {
        return new WorldBorder(this.context)
    }
  
    public get whitelist() {
        return new WhiteList(this.context)
    }
   
    public get weather() {
        return new Weather(this.context)
    }

    public get trigger() {
        return new Trigger(this.context)
    }
 
    public get title() {
        return new Title(this.context)
    }
 
    public get time() {
        return new Time(this.context)
    }
  
    public get team() {
        return new Team(this.context)
    }
  
    public get bossbar() {
        return new Bossbar(this.context)
    }
  
    public get datapack() {
        return new Datapack(this.context)
    }
  
    public get effect() {
        return new Effect(this.context)
    }
   
    public get experience() {
        return new Experience(this.context)
    }
  
    public get gamerule() {
        return new GameRule(this.context)
    }
  
    public get recipe() {
        return new Recipe(this.context)
    }
 
    public get replaceitem() {
        return new ReplaceItem(this.context)
    }
  
    public get schedule() {
        return new Schedule(this.context)
    }
 
    public get data() {
        return new Data(this.context)
    }
    public scoreboard(objective: Objective) {
        return new Scoreboard(this.context, objective)
    }

    public objective(name: string, criterion: Criteria = 'dummy', displayName?: string) {
        return new Objective({ name, criterion, displayName }, this.#target)
    }

    public clear(item: string, maxCount: int) {
        this.context.add(_.clear(this.#target, item, maxCount))
        return this
    }

    public clone(from: string, to: string, dist: string): Command
    public clone(from: string, to: string, dist: string, maskMode: MaskMode): Command
    public clone(from: string, to: string, dist: string, maskMode: MaskMode, cloneMode: CloneMode): Command
    public clone(from: string, to: string, dist: string, maskMode: MaskMode, cloneMode: CloneMode, blockId: string): Command
    public clone(from: string, to: string, dist: string, arg?: MaskMode, arg2?: CloneMode): Command {
        this.context.add(_.clone(from, to, dist, arg, arg2))
        return this
    }

    public debug(action: ActionType) {
        this.context.add(_.debug(action))
        return this
    }

    public defaultgamemode(mode: GameMode) {
        this.context.add(_.defaultgamemode(mode))
        return this
    }

    public deop(player: Selector) {
        this.context.add(_.deop(player))
        return this
    }

    public difficulty(mode: GameMode) {
        this.context.add(_.difficulty(mode))
        return this
    }

    public enchant(enchantId: EnchantmentId, level: int) {
        this.context.add(_.enchant(this.#target, enchantId, level))
        return this
    }

    public fill(from: string, to: string, blockId: BlockItemId): Command
    public fill(from: string, to: string, blockId: BlockItemId, mode: FillMode): Command
    public fill(from: string, to: string, blockId: BlockItemId, replaceBlockId: string): Command
    public fill(from: string, to: string, blockId: BlockItemId, arg?: FillMode | string) {
        this.context.add(_.fill(from, to, blockId, arg))
        return this
    }

    public gamemode(mode: GameMode) {
        this.context.add(_.gamemode(mode, this.#target))
        return this
    }

    public kick(reason?: string) {
        this.context.add(_.kick(this.#target, reason))
        return this
    }

    
    public kill() {
        this.context.add(_.kill(this.#target))
        return this
    }

    public locate(structure: StructureType) {
        this.context.add(structure)
        return this
    }

    public msg(message: string) {
        this.context.add(_.msg(this.#target, message))
        return this
    }

    public op(player: Selector) {
        this.context.add(_.op(player))
        return this
    }

    public pardon(name: string) {
        this.context.add(_.pardon(name))
        return this
    }

    public pardonIp(ip: string) {
        this.context.add(_.pardonIp(ip))
        return this
    }

    public particle(particleId: ParticleIdType, location: string): Command
    public particle(particleId: ParticleIdType, location: string, delta: string): Command
    public particle(particleId: ParticleIdType, location: string, delta: string, speed: double): Command
    public particle(particleId: ParticleIdType, location: string, delta: string, speed: double, count: int): Command
    public particle(particleId: ParticleIdType, location: string, delta: string, speed: double, count: int, mode: VisibleMode): Command
    public particle(particleId: ParticleIdType, location?: string, delta?: string, speed?: double, count?: int, mode?: VisibleMode) {
        this.context.add(_.particle(particleId, location, delta, speed, count, mode, this.#target))
        return this
    }

    public playsound(soundPath: string, source: string): Command
    public playsound(soundPath: string, source: string, location: string): Command
    public playsound(soundPath: string, source: string, location: string, volume: float): Command
    public playsound(soundPath: string, source: string, location: string, volume: float, tone: float): Command
    public playsound(soundPath: string, source: string, location: string, volume: float, tone: float, minVolume: float): Command
    public playsound(soundPath: string, source: string, location?: string, volume?: float, tone?: float, minVolume?: float) {
        this.context.add(_.playsound(soundPath, source, this.#target, location, volume, tone, minVolume))
        return this
    }

    public publish(port?: string) {
        this.context.add(_.publish(port))
        return this
    }

    public seed() {
        this.context.add(_.seed())
    }

    public setblock(location: string, blockId: string): Command
    public setblock(location: string, blockId: string, mode: SetblockMode): Command
    public setblock(location: string, blockId: string, arg?: SetblockMode) {
        this.context.add(_.setblock(location, blockId, arg))
        return this
    }

    public setidletimeout(minute: int) {
        this.context.add(_.setidletimeout(minute))
        return this
    }

    public setworldspawn(location?: string) {
        this.context.add(_.setworldspawn(location))
        return this
    }

    public spawnpoint(location: string) {
        this.context.add(_.spawnpoint(this.#target, location))
        return this
    }

    public spreadplayers(location: string, spreadDistance: float, maxRange: float, respectTeams: boolean) {
        this.context.add(_.spreadplayers(location, spreadDistance, maxRange, respectTeams, this.#target))
        return this
    }

    public stop() {
        this.context.add(_.stop())
        return this
    }

    public stopsound(source: string):Command
    public stopsound(source: SoundType, soundPath: string):Command
    public stopsound(source?: SoundType, soundPath?: string) {
        this.context.add(_.stopsound(this.#target, source, soundPath))
        return this
    }

    public summon(nbt: Entity, location = '~ ~ ~') {
        this.context.add(_.summon(nbt, location))
        return this
    }

    public teammsg(message: string) {
        this.context.add(_.teammsg(message))
        return this
    }

    public say(message: string) {
        this.context.add(_.say(message))
        return this
    }

    public tm(message: string) {
        this.context.add(_.tm(message))
        return this
    }

    public teleport(destination: Selector, rotation?: string): Command
    public teleport(location: string): Command
    public teleport(arg2: any, arg3?: string) {
        this.context.add(_.teleport(this.#target, arg2, arg3))
        return this
    }

    public tell(message: string) {
        this.context.add(_.tell(this.#target, message))
    }

    public tp(destination: Selector, rotation?: string): Command
    public tp(location: string): Command
    public tp(arg2: any, arg3?: string) {
        this.context.add(_.tp(this.#target, arg2, arg3))
        return this
    }

    public w(msg: string) {
        this.context.add(_.w(this.#target, msg))
        return this
    }

    public $function(name: string) {
        this.context.add(_.$function(name))
        return this
    }

    public ban(reason?: string) {
        this.context.add(_.ban(this.#target, reason))
        return this
    }

    public banIp(ip: string, reason?: string) {
        this.context.add(_.banIp(ip, reason))
        return this
    }

    public banList(type?: BanTargetType) {
        this.context.add(_.banList(type))
        return this
    }

    public list(uuids?: string) {
        this.context.add(_.list(uuids))
        return this
    }

    public locatebiome(biomeId: BiomeId) {
        this.context.add(_.locatebiome(biomeId))
        return this
    }

    public me(msg: string) {
        this.context.add(_.me(msg))
        return this
    }

    public reload() {
        this.context.add(_.reload())
        return this
    }

    public save(type: SaveType) {
        this.context.add(_.save(type))
        return this
    }

    public saveAll() {
        this.context.add(_.saveAll())
        return this
    }

    public saveOn() {
        this.context.add(_.saveOn())
        return this
    }

    public saveOff() {
        this.context.add(_.saveOff())
        return this
    }

    public tellraw(json: LiteralType<TextToken[]>) {
        this.context.add(_.tellraw(this.#target, json))
        return this
    }
    
    public spectate(player: string) {
        this.context.add(_.spectate(this.#target, player))
        return this
    }
}
