import { Selector } from 'mdk-core';

export default {
    add,
    remove,
    list,
}

/**
 * 为该实体创建一个新的标签。
 * @param tagName 标签名
 */
function add(target: Selector | string, tagName: string) {
    return `tag ${target.toString()} add ${tagName}`
}
/**
 * 移除该实体所拥有的一个标签。
 * @param tagName 标签名
 */
function remove(target: Selector | string, tagName: string) {
    return `tag ${target.toString()} remove ${tagName}`
}
/**
 * 列出该实体拥有的全部标签。
 * @param tagName 标签名
 */
function list(target: Selector | string) {
    return `tag ${target.toString()} list`
}