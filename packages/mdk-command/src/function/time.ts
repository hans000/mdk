import { int } from 'mdk-nbt'


export type TimeUnit = 's' | 'd'
export type QueryType = 'datatime' | 'day' | 'gametime'
export type TimeScale =
    | 'day'
    | 'noon'
    | 'night'
    | 'midnight'

export default {
    add,
    query,
    set,
}
/**
 * 增加时间
 * @param time 时间
 */
function add(time: int | TimeScale) {
    return `time add ${time}`
}

/**
 * 查询时间
 * @param queryType 查询类型
 */
function query(queryType: QueryType) {
    return `time query ${queryType}`
}

/**
 * 设置时间
 * @param time 时间
 */
function set(time: int): string;
function set(time: int, unit: TimeUnit): string;
function set(time: int, unit?: TimeUnit) {
    if (unit as TimeUnit) {
        return `time set ${time}${unit}`
    }
    return `time set ${time}`
}