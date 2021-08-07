import { escape } from "../string"
import { addSuffix, mapPrefix } from "./map"

function GsonArray(object: Array<any>) {
    const result = object.reduce((s, v) => s += `${GsonStringify(v)},`, '')
    return `[${result.slice(0, -1)}]`
}

function GsonObject(object: unknown) {
    const result = Object.keys(object).reduce((s, k) => {
        const value = object[k]
        const v = Array.isArray(value)
            ? GsonArray(value)
            : (value && typeof value === 'object')
                ? GsonObject(value)
                : GsonStringify(value, k)
        return s += `${k}:${v},`
    }, '')
    return `{${result.slice(0, -1)}}`
}

export function GsonStringify(object: any, key?: string) {
    if (object == undefined) {
        return '""'
    }
    if (Array.isArray(object)) {
        return GsonArray(object)
    }
    if (typeof object === 'object') {
        return GsonObject(object)
    }
    if (typeof object === 'string') {
        const prefix = mapPrefix[key]
        return `"${escape((prefix ? prefix : '') + object)}"`
    }
    if (typeof object === 'number') {
        return object + addSuffix(key)
    }
    if (typeof object === 'boolean') {
        return +object + 'b'
    }
    return object
}