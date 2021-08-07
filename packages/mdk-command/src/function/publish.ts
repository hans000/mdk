/**
 * 向局域网开放单人游戏世界。
 * @param port 端口
 */
export default function(port?: string) {
    if (port as string) {
        return `publish ${port}`
    }
    return `publish`
}