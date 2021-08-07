import { ArgumentExpection } from "../../expection";

/**
 * location解析器
 * @param location 待解析的location字符串
 */
export default function parseLocation(location: string) {
    const list = location.split(' ')
    if (list.length !== 3) {
        throw ArgumentExpection('invalid location `' + location + '`, should be `x y z`')
    }

    const result = [0, 0, 0]
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const match = item.match(/([~^]?(\d+))|([~^])/)
        if (!match) {
            throw ArgumentExpection('invalid param `' + item + '` in location `' + location + '`')
        }
        const num = match[3] ? 0 : +match[2]
        result[i] = num
    }
    return result
}