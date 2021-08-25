import { LiteralType } from "@typings/tool"
import { escape } from "@utils/index"
import { TextToken } from "./TextToken"

function textFormat(item: TextToken) {
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

export class JText {
    
    public static format(text: LiteralType<TextToken[]>) {
        if (Array.isArray(text)) {
            const result = text.reduce((s, v) => s += textFormat(v), '')
            return `[${('"",' + result).slice(0, -1)}]`
        }
        return text
    }
    
    public static toJson(text: TextToken[]) {
        return {
            type: 'jtext',
            text: null,
            extra: text,
        }
    }
}