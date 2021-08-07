export type ActionType = 'start' | 'stop' | 'report'

/**
 * 开始或结束调试会话。
 * @param action 动作
 */
export default function(action: ActionType) {
    return `debug ${action}`
}