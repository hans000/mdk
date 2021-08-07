import { addAffix, eatChar } from "../../index"
import { escape } from "../string"
import { mapList, mapListNum, mapCompound, mapComposition, mapPrefix, addSuffix } from "./map"

type Nbt = ListNbt | NormalNbt | ComplexNbt

type NormalNbt = string | number

interface ComplexNbt {
    [propName: string]: any
}

type ListNbt = string[] | number[] | ComplexNbt[]

interface NormalKV {
    [propName: string]: NormalNbt
}

interface ComplexKV {
    [propName: string]: ListNbt
}

function stringify(key: string, val: Nbt): string {
    if (mapList.includes(key)) return list(key, val as ListNbt, true)
    if (mapListNum.includes(key)) return list(key, val as ListNbt)
    if (mapCompound.includes(key)) return compound(key, val as ComplexNbt[])
    if (mapComposition.includes(key)) return composition(val as ComplexNbt, key)
    return normal(key, val as NormalNbt)
}

function normal(key: string, value: NormalNbt): string {
    if (value == null) return ''
    const prefix = mapPrefix[key]
    const newValue = typeof value === 'number' 
        ? +value + addSuffix(key)
        : `"${escape((prefix ? prefix : '') + value)}"`
    return `${key}:${newValue}`
}

export function composition(value: ComplexNbt, key?: string): string {
    let result = Object.keys(value).reduce((s: string, e: string): string => {
        return s += addAffix(stringify(e, value[e]))
    }, '')
    let a = eatChar(result, ',')
    return key ? `${key}:{${a}}` : `{${a}}`
}

function list(key: string, list: ListNbt, flag?: boolean): string {
    if (flag) {
        return `${key}:["${list.join('","')}"]`
    } else {
        return `${key}:[${list.join(addSuffix(key) + ',')}${addSuffix(key)}]`
    }
}

function compound(key: string, list: ComplexNbt[]): string {
    let result = list.reduce((s: string, e: ComplexNbt): string => {
        return s += `{${eatChar(addAffix(composition(e)), ',')}},`
    }, '')
    return `${key}:[${eatChar(result, ',')}]`
}