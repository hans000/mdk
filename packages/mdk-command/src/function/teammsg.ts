/**
 * 给使用命令的实体所在的队伍全体成员发送消息，不在命令方块上执行。
 * @param message 消息
 */
export default function(message: string) {
    return `teammsg ${message}`
}
/**
 * 给使用命令的实体所在的队伍全体成员发送消息，不在命令方块上执行。
 * @param message 消息
 */
export function tm(message: string) {
    return `tm ${message}`
}