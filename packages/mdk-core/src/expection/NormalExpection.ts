/** 参数错误 */
export function ArgumentExpection(...message: string[]) {
    return new Error(`Argument Expection: ${message.join('')}`)
}
/** 字段错误 */
export function FieldExpection(...message: string[]) {
    return new Error(`Field Expection: ${message.join('')}`)
}
/** 容器错误 */
export function ContainerExpection(...message: string[]) {
    return new Error(`Container Expection: ${message.join('')}`)
}
/** 使用场景错误 */
export function SceneExpection(...message: string[]) {
    return new Error(`Scene Expection: ${message.join('')}`)
}