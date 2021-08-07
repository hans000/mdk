import { int, float } from 'mdk-nbt'

export default {
    add,
    center,
    get: () => 'worldborder get',
    set,
    damage: {
        amount,
        buffer,
    },
    warning: {
        distance,
        time,
    }
}
/**
 * 增减世界边界的直径，即正方形边长
 * @param distance 距离
 */
function add(distance: int): string;
/**
 * 增减世界边界的直径，即正方形边长
 * @param distance 距离
 * @param time 时间
 */
function add(distance: int, time: int): string;
function add(distance: int, time?: int) {
    if (time as int) {
        return `worldborder add ${distance}`
    }
    return `worldborder add ${distance}`
}

/**
 * 获取世界边界的中心
 */
function center(): string
/**
 * 设置世界边界的中心
 * @param location 坐标 x z
 */
function center(location?: string): string
function center(location?: string) {
    if (location as string) {
        return `worldborder center ${location}`
    }
    return `worldborder center`
}

/**
 * 设置世界边界的直径大小
 * @param distance 距离
 */
function set(distance: int): string;
/**
 * 设置世界边界的直径大小
 * @param distance 距离
 * @param time 时间
 */
function set(distance: int, time: int): string;
function set(distance: int, time?: int) {
    if (time as int) {
        return `worldborder set ${distance} ${time}`
    }
    return `worldborder set ${distance}`
}

/**
 * 指定世界边界外伤害速度
 * @param damage 伤害
 */
function amount(damage: float) {
    return `worldborder damage amount ${damage}`
}

/**
 * 指定世界边界伤害缓冲区距离
 * @param distance 距离
 */
function buffer(distance: int) {
    return `worldborder damage buffer ${distance}`
}

/**
 * 指定世界边界出现警告的距离
 * @param distance 距离
 */
function distance(distance: int) {
    return `worldborder warning distance ${distance}`
}

/**
 * 指定世界边界的警告时间
 * @param time 时间
 */
function time(time: int) {
    return `worldborder warning time ${time}`
}