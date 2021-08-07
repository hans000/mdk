import { Selector } from 'mdk-core';

export type AttributeModifier =
    | 'add'
    | 'multiply'
    | 'multiply_base'

export default {
    get,
    getBase,
    setBase,
    add,
    remove,
    getValue,
}

// TODO attribute https://minecraft.gamepedia.com/Commands/attribute

function get(target: Selector, attribute: string, scale: number) {
    return `attribute ${target.toString()} ${attribute} get ${scale}`
}

function getBase(target: Selector, attribute: string, scale: number) {
    return `attribute ${target.toString()} ${attribute} base get ${scale}`
}

function setBase(target: Selector, attribute: string, value: number) {
    return `attribute ${target.toString()} ${attribute} base set ${value}`
}

function add(target: Selector, attribute: string, uuid: string, name: string, value: string, type: AttributeModifier = 'add') {
    return `attribute ${target.toString()} ${attribute} modifier add ${uuid} ${name} ${value} ${type}`
}

function remove(target: Selector, attribute: string, uuid: string) {
    return `attribute ${target.toString()} ${attribute} modifier remove ${uuid}`
}

function getValue(target: Selector, attribute: string, uuid: string, scale: number) {
    return `attribute ${target.toString()} ${attribute} modifier value get ${uuid} ${scale}`
}
