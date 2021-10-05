import { LiteralUnion } from "@tools/typings";

export class LineInfo<T extends any = unknown> {
    /** 类型 */
    public readonly type: LiteralUnion<CommandType, string>
    /** 指令内容 */
    public  readonly text: string
    /** 额外数据 */
    public readonly extra?: T
    
    constructor(type: LiteralUnion<CommandType, string>, text: string, extra?: T) {
        this.type = type
        this.text = text
        this.extra = extra
    }
}

export type CommandType = 
    | 'comment'
    | 'space-line'
    | 'difficulty'
    | 'spawnpoint'
    | 'summon'
    | 'clear'
    | 'tp'
    | 'teleport'
    | 'effect'
    | 'tag'
    | 'experience'
    | 'enchant'
    | 'debug'
    | 'datapack'
    | 'bossbar'
    | 'defaultgamemode'
    | 'deop'
    | 'gamemode'
    | 'gamerule'
    | 'kick'
    | 'kill'
    | 'locate'
    | 'op'
    | 'pardon'
    | 'pardon-ip'
    | 'particle'
    | 'playsound'
    | 'publish'
    | 'recipe'
    | 'replaceitem'
    | 'schedule'
    | 'seed'
    | 'setidletimeout'
    | 'setworldspawn'
    | 'spreadplayers'
    | 'stop'
    | 'stopsound'
    | 'team'
    | 'tell'
    | 'msg'
    | 'w'
    | 'setblock'
    | 'fill'
    | 'clone'
    | 'teammsg'
    | 'time'
    | 'trigger'
    | 'title'
    | 'weather'
    | 'whitelist'
    | 'worldborder'
    | 'xp'
    | 'scoreboard'
    | 'execute'
    | 'help'
    | 'forceload'
    | 'function'
    | 'attribute'
    | 'advancement'
    | 'ban'
    | 'ban-ip'
    | 'ban-list'
    | 'list'
    | 'locatebiome'
    | 'loot'
    | 'me'
    | 'reload'
    | 'spectate'
    | 'tellraw'
    | 'say'
    | 'data'
    | 'save'
    | 'save-all'
    | 'save-off'
    | 'save-on'