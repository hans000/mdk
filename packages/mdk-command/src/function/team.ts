import { Selector } from 'mdk-core';

export default {
    add,
    empty,
    join,
    leave,
    list,
    modify,
}

/**
 * 创建一个新队伍。
 * @param teamName 队伍名
 */
function add(teamName: string): string;
/**
 * 创建一个新队伍。
 * @param teamName 队伍名
 * @param displayName 展示名称
 */
function add(teamName: string, displayName: string): string;
function add(teamName: string, displayName?: string) {
    return `team add ${teamName}${displayName === undefined ? '' : ' ' + displayName}`
}

/**
 * 移除目标队伍中所有的成员。
 * @param teamName 队伍名
 */
function empty(teamName: string) {
    return `team empty ${teamName}`
}

/**
 * 使目标玩家或实体离开队伍。
 * @param teamName 队伍名
 */
function join(teamName: string): string
/**
 * 使目标玩家或实体离开队伍。
 * @param teamName 队伍名
 * @param member 成员
 */
function join(teamName: string, member?: Selector): string
function join(teamName: string, member?: Selector) {
    return `team join ${teamName}${member ? ' ' + member.toString() : ''}`
}

/**
 * 使目标玩家或实体离开队伍。
 * @param teamName 队伍名
 */
function leave(member: Selector) {
    return `team leave ${member.toString()}`
}

/**
 * 列出所有队伍。当队伍名指定时，列出属于该队伍的所有成员。
 */
function list(): string;
/**
 * 列出所有队伍。当队伍名指定时，列出属于该队伍的所有成员。
 * @param teamName 队伍名
 */
function list(teamName?: string): string;
function list(teamName?: string) {
    return `team list${teamName ? ' ' + teamName : '' }`
}

/**
 *  将目标队伍选项的值修改为指定值。
 * @param teamName 队伍名
 */
function modify(teamName: string, criteria: string, value: number) {
    return `team modify ${teamName} ${criteria} ${value}`
}
