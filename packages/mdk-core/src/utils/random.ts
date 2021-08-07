/**
 * 获取随机字符串
 */
export function getRandomStr () {
    return Math.random().toString(36).slice(2).toLocaleUpperCase()
}