import { int } from 'mdk-nbt';

/**
 * 设置踢出空闲玩家的计时器，当玩家空闲时间超过空闲分钟数后会被踢出服务器。
 * @param minute 时间
 */
export default function(minute: int) {
    return `setidletimeout ${minute}`
}