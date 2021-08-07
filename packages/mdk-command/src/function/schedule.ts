export type ScheduleMode = 'append' | 'replace'

export default {
    functionName,
    clear,
}
/**
 * 将函数列入队伍。
 * @param functionName 函数名
 * @param time 时间
 * @param mode 模式
 */
function functionName(functionName: string, time: string, mode: ScheduleMode) {
    return `schedule function ${functionName} ${time} ${mode}`
}
/**
 * 将等待运行的函数从等待队伍中删除。
 * @param functionName 函数名
 */
function clear(functionName: string) {
    return `schedule clear ${functionName}`
}