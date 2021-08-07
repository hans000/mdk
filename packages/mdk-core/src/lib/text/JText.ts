import { escape } from "@utils/index"
import { ToJsonAbstract } from "@model/index"
import { TextToken } from "./TextToken"

export function jtext(): JText
export function jtext(items: TextToken[] | TextToken): JText
export function jtext(arg?: TextToken[] | TextToken) {
    return new JText(arg)
}

export class JText extends ToJsonAbstract {
    #list: TextToken[] = []

    constructor()
    constructor(items: TextToken[] | TextToken)
    constructor(items?: TextToken[] | TextToken) {
        super()
        if (items) {
            this.add(items)
        }
    }

    private textFormat(item: TextToken) {
        let result = ''
        if (item.nbt) {
            result = `"nbt":"${item.nbt}"`
            item.interpret && (result += `,"interpret":true`)
            if (item.entity) {
                result += `,"entity":${escape(item.entity)}`
            } else if (item.block) {
                result += `,"entity":${escape(item.block)}`
            } else {
                result += `,"storage":${escape(item.storage)}`
            }
        } else if (item.selector) {
            result = `"selector":"${escape(item.selector)}"`
        } else if (item.keybind) {
            result = `"keybind":"${item.keybind}"`
        } else if (item.score) {
            result = `"score":${escape(JSON.stringify(item.score))}`
        } else if (item.translate) {
            result = `"translate":"${escape(item.translate)}"`
            if (item.with?.length) {
                result += `,"with":${escape(JSON.stringify(item.with.join))}`
            }
        } else {
            result = `"text":"${escape(item.text)}"`
        }
        
        item.color && (result += `,"color":"${item.color}"`)
        item.font && (result += `,"font":"${escape(item.font)}"`)
        item.separator && (result += `,"separator":"${escape(item.separator)}"`)

        item.bold && (result += `,"bold":true`)
        item.italic && (result += `,"italic":true`)
        item.obfuscated && (result += `,"obfuscated":true`)
        item.underlined && (result += `,"underlined":true`)
        item.strikethrough && (result += `,"strikethrough":true`)
        item.insertion && (result += `,"insertion":true`)
        
        item.clickEvent && (result += `,"clickEvent":{"action":"${item.clickEvent.action}","value":"${escape(item.clickEvent.value + '')}"}`)
        item.hoverEvent && (result += `,"hoverEvent":{"action":"${item.hoverEvent.action}","value":"${escape(item.hoverEvent.value + '')}"}`)
        return `{${result}},`
    }

    public get list() {
        return this.#list
    }
    
    public add(items: TextToken[] | TextToken) {
        const arr = Array.isArray(items) ? items : [items]
        this.#list.push(...arr)
    }
    
    public toString() {
        const result = this.#list.reduce((s, v) => s += this.textFormat(v), '')
        return `[${('"",' + result).slice(0, -1)}]`
    }
    
    public toJson() {
        return {
            type: 'jtext',
            text: null,
            extra: this.#list,
        }
    }
}