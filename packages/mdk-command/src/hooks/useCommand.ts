import { WhiteList, Title, Team, Advancement, Attribute, Bossbar, Data, Datapack, Effect, Execute, Experience, Forceload, GameRule, Loot, Recipe, ReplaceItem, Schedule, Time, Trigger, Weather, WorldBorder, Tag, Scoreboard } from '../class/context'
import { BanTargetType } from '../function/ban'
import { CloneMode, MaskMode } from '../function/clone'
import { ActionType } from '../function/debug'
import { FillMode } from '../function/fill'
import { ParticleIdType, VisibleMode } from '../function/particle'
import { SaveType } from '../function/save'
import { SetblockMode } from '../function/setblock'
import { Selector, useFile, JText, File, Criteria, LiteralType, TextToken } from 'mdk-core'
import { BiomeId, double, EnchantmentId, Entity, float, GameMode, int, SoundType, StructureType } from 'mdk-nbt'
import { BlockItemId } from 'mdk-nbt/dist/item/__'
import * as _ from '../function/index'
import { Objective } from '@/core/objective'

export function useCommand(target = new Selector()) {
    const file = useFile() as File
   
    function tag() {
        return new Tag(file, target)
    }
    
    function scoreboard(objective: Objective) {
        return new Scoreboard(file, objective)
    }

    function objective(name: string, criterion: Criteria = 'dummy', displayName?: string) {
        return new Objective({ name, criterion, displayName }, target)
    }

    function clear(item: string, maxCount: int) {
        file.add(_.clear(target, item, maxCount))
    }

    function clone(from: string, to: string, dist: string): void
    function clone(from: string, to: string, dist: string, maskMode: MaskMode): void
    function clone(from: string, to: string, dist: string, maskMode: MaskMode, cloneMode: CloneMode): void
    function clone(from: string, to: string, dist: string, maskMode: MaskMode, cloneMode: CloneMode, blockId: string): void
    function clone(from: string, to: string, dist: string, arg?: MaskMode, arg2?: CloneMode): void {
        file.add(_.clone(from, to, dist, arg, arg2))
    }

    function debug(action: ActionType) {
        file.add(_.debug(action))
    }

    function defaultgamemode(mode: GameMode) {
        file.add(_.defaultgamemode(mode))
    }

    function deop(player: Selector) {
        file.add(_.deop(player))
    }

    function difficulty(mode: GameMode) {
        file.add(_.difficulty(mode))
    }

    function enchant(enchantId: EnchantmentId, level: int) {
        file.add(_.enchant(target, enchantId, level))
    }

    function fill(from: string, to: string, blockId: BlockItemId): void
    function fill(from: string, to: string, blockId: BlockItemId, mode: FillMode): void
    function fill(from: string, to: string, blockId: BlockItemId, replaceBlockId: string): void
    function fill(from: string, to: string, blockId: BlockItemId, arg?: FillMode | string) {
        file.add(_.fill(from, to, blockId, arg))
    }

    function gamemode(mode: GameMode) {
        file.add(_.gamemode(mode, target))
    }

    function kick(reason?: string) {
        file.add(_.kick(target, reason))
    }

    
    function kill() {
        file.add(_.kill(target))
    }

    function locate(structure: StructureType) {
        file.add(structure)
    }

    function msg(message: string) {
        file.add(_.msg(target, message))
    }

    function op(player: Selector) {
        file.add(_.op(player))
    }

    function pardon(name: string) {
        file.add(_.pardon(name))
    }

    function pardonIp(ip: string) {
        file.add(_.pardonIp(ip))
    }

    function particle(particleId: ParticleIdType, location: string): void
    function particle(particleId: ParticleIdType, location: string, delta: string): void
    function particle(particleId: ParticleIdType, location: string, delta: string, speed: double): void
    function particle(particleId: ParticleIdType, location: string, delta: string, speed: double, count: int): void
    function particle(particleId: ParticleIdType, location: string, delta: string, speed: double, count: int, mode: VisibleMode): void
    function particle(particleId: ParticleIdType, location?: string, delta?: string, speed?: double, count?: int, mode?: VisibleMode) {
        file.add(_.particle(particleId, location, delta, speed, count, mode, target))
    }

    function playsound(soundPath: string, source: string): void
    function playsound(soundPath: string, source: string, location: string): void
    function playsound(soundPath: string, source: string, location: string, volume: float): void
    function playsound(soundPath: string, source: string, location: string, volume: float, tone: float): void
    function playsound(soundPath: string, source: string, location: string, volume: float, tone: float, minVolume: float): void
    function playsound(soundPath: string, source: string, location?: string, volume?: float, tone?: float, minVolume?: float) {
        file.add(_.playsound(soundPath, source, target, location, volume, tone, minVolume))
    }

    function publish(port?: string) {
        file.add(_.publish(port))
    }

    function seed() {
        file.add(_.seed())
    }

    function setblock(location: string, blockId: string): void
    function setblock(location: string, blockId: string, mode: SetblockMode): void
    function setblock(location: string, blockId: string, arg?: SetblockMode) {
        file.add(_.setblock(location, blockId, arg))
    }

    function setidletimeout(minute: int) {
        file.add(_.setidletimeout(minute))
    }

    function setworldspawn(location?: string) {
        file.add(_.setworldspawn(location))
    }

    function spawnpoint(location: string) {
        file.add(_.spawnpoint(target, location))
    }

    function spreadplayers(location: string, spreadDistance: float, maxRange: float, respectTeams: boolean) {
        file.add(_.spreadplayers(location, spreadDistance, maxRange, respectTeams, target))
    }

    function stop() {
        file.add(_.stop())
    }

    function stopsound(source: string):void
    function stopsound(source: SoundType, soundPath: string):void
    function stopsound(source?: SoundType, soundPath?: string) {
        file.add(_.stopsound(target, source, soundPath))
    }

    function summon(nbt: Entity, location = '~ ~ ~') {
        file.add(_.summon(nbt, location))
    }

    function teammsg(message: string) {
        file.add(_.teammsg(message))
    }

    function say(message: string) {
        file.add(_.say(message))
    }

    function tm(message: string) {
        file.add(_.tm(message))
    }

    function teleport(destination: Selector, rotation?: string): void
    function teleport(location: string): void
    function teleport(arg2: any, arg3?: string) {
        file.add(_.teleport(target, arg2, arg3))
    }

    function tell(message: string) {
        file.add(_.tell(target, message))
    }

    function tp(destination: Selector, rotation?: string): void
    function tp(location: string): void
    function tp(arg2: any, arg3?: string) {
        file.add(_.tp(target, arg2, arg3))
    }

    function w(msg: string) {
        file.add(_.w(target, msg))
    }

    function $function(name: string) {
        file.add(_.$function(name))
    }

    function ban(reason?: string) {
        file.add(_.ban(target, reason))
    }

    function banIp(ip: string, reason?: string) {
        file.add(_.banIp(ip, reason))
    }

    function banList(type?: BanTargetType) {
        file.add(_.banList(type))
    }

    function list(uuids?: string) {
        file.add(_.list(uuids))
    }

    function locatebiome(biomeId: BiomeId) {
        file.add(_.locatebiome(biomeId))
    }

    function me(msg: string) {
        file.add(_.me(msg))
    }

    function reload() {
        file.add(_.reload())
    }

    function save(type: SaveType) {
        file.add(_.save(type))
    }

    function saveAll() {
        file.add(_.saveAll())
    }

    function saveOn() {
        file.add(_.saveOn())
    }

    function saveOff() {
        file.add(_.saveOff())
    }

    function tellraw(json: LiteralType<TextToken[]>) {
        file.add(_.tellraw(target, json))
    }
    
    function spectate(player: string) {
        file.add(_.spectate(target, player))
    }

    return {
        tag,
        scoreboard,
        objective,
        clear,
        clone,
        debug,
        defaultgamemode,
        deop,
        difficulty,
        enchant,
        fill,
        gamemode,
        kick,
        kill,
        locate,
        msg,
        op,
        pardon,
        pardonIp,
        particle,
        playsound,
        publish,
        seed,
        setblock,
        setidletimeout,
        setworldspawn,
        spawnpoint,
        spreadplayers,
        stop,
        stopsound,
        summon,
        teammsg,
        say,
        tm,
        teleport,
        tell,
        tp,
        w,
        $function,
        ban,
        banIp,
        banList,
        list,
        locatebiome,
        me,
        reload,
        save,
        saveAll,
        saveOn,
        saveOff,
        tellraw,
        spectate,

        attribute: new Attribute(file),
        loot: new Loot(file),
        forceload: new Forceload(file),
        advancement: new Advancement(file),
        execute: new Execute(file),
        worldborder: new WorldBorder(file),
        whitelist: new WhiteList(file),
        weather: new Weather(file),
        trigger: new Trigger(file),
        title: new Title(file),
        time: new Time(file),
        team: new Team(file),
        bossbar: new Bossbar(file),
        datapack: new Datapack(file),
        effect: new Effect(file),
        experience: new Experience(file),
        gamerule: new GameRule(file),
        recipe: new Recipe(file),
        replaceitem: new ReplaceItem(file),
        schedule: new Schedule(file),
        data: new Data(file),
    }
}