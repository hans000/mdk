import { int } from 'mdk-nbt'

export default {
    clear,
    rain,
    thunder,
}
/**
 * 将天气设为晴天。
 */
function clear(): string;
/**
 * 将天气设为晴天。
 * @param duration 持续时间
 */
function clear(duration: int): string;
function clear(duration?: int) {
    if (duration as int) {
        return `weather clear ${duration}`
    }
    return `weather clear`
}

/**
 * 将天气设为雨天（寒冷的生物群系会下雪）。
 */
function rain(): string;
/**
 * 将天气设为雨天（寒冷的生物群系会下雪）。
 * @param duration 持续时间
 */
function rain(duration: int): string;
function rain(duration?: int) {
    if (duration as int) {
        return `weather rain ${duration}`
    }
    return `weather rain`
}

/**
 * 将天气设为雷暴雨（寒冷的生物群系会下雷暴雪）。
 */
function thunder(): string;
/**
 * 将天气设为雷暴雨（寒冷的生物群系会下雷暴雪）。
 * @param duration 持续时间
 */
function thunder(duration: int): string;
function thunder(duration?: int) {
    if (duration as int) {
        return `weather thunder ${duration}`
    }
    return `weather thunder`
}