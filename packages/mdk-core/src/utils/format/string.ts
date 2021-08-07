/**
 * 转义
 * @param raw 原始字符串
 */
export function escape(raw: string) {
    return raw.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}
/**
 * 反转义
 * @param raw 原始字符串
 */
export function unescape(raw: string) {
    return raw.replace(/\\\\/g, '\\').replace(/"/g, '"')
}
  

export function addAffix(raw: string, char =',') {
    return raw[raw.length - 1] === char ? raw : raw ? raw + char : raw
}

/**
 * 删除尾部字符
 * @param raw 元字符串
 */
 export function eatChar(raw: string): string
/**
 * 删除尾部字符
 * @param raw 元字符串
 * @param char 处理的字符
 */
export function eatChar(raw: string, char: string): string
/**
 * 删除尾部字符
 * @param raw 元字符串
 * @param reg 处理字符的正则
 */
export function eatChar(raw: string, reg: RegExp): string
export function eatChar(raw: string, char: string | RegExp = ',') {
    const reg = char instanceof RegExp
        ? char
        : new RegExp(`\\s*(${char})*$`, 'g')
    return raw.replace(reg, '')
}

/**
 * 下划线转换驼峰
 */
export function toHump(str: string) {
    return str.replace(/\_(\w)/g, (_, letter) => letter.toUpperCase())
}
/**
 * 下划线转换大驼峰
 */
export function toPascal(str: string) {
    return str.replace(/(^\w)|(_\w)/g, (letter) => letter.slice(-1).toUpperCase())
}

/**
 * 驼峰转换下划线
 */
export function toLine(name: string) {
    return name.replace(/([A-Z])/g, "_$1").toLowerCase()
}
/**
 * 驼峰转换连接符
 */
export function toLink(name: string) {
    return name.replace(/([A-Z])/g, "-$1").toLowerCase()
}
/**
 * 修正指令字符串
 */
export function revise(str: string) {
    return str.replace(/(\s*undefined)*\s*$/g, '')
}