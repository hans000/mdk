export interface LineInfo<T extends any = unknown> {
    /** 类型 */
    type: string
    /** 指令内容 */
    text: string
    /** 额外数据 */
    extra?: T
}