/**
 * 从黑名单上移除项目。
 * @param name 玩家名
 */
export function pardon(name: string) {
    return `pardon ${name}`
}
/**
 * 从黑名单上移除项目。
 * @param address ip地址
 */
export function pardonIp(ip: string) {
    return `pardon-ip ${ip}`
}