import { ArgumentExpection } from "@tools/expection";

/**
 * rotation解析器
 * @param rotation 待解析的rotation字符串
 */
export default function parseRotation(rot: string) {
    const list = rot.split(' ')
    if (list.length !== 2) {
        throw ArgumentExpection('invalid rotation `' + rot + '`, should be `x y`')
    }

    const result = [0, 0]
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const match = item.match(/([~]?(\d+))|([~])/)
        if (!match) {
            throw ArgumentExpection('invalid param `' + item + '` in rotation `' + rot + '`')
        }
        const num = match[3] ? 0 : +match[2]
        result[i] = num
    }
    return result
}