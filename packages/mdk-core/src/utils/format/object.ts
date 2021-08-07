import { ScoreRange } from 'mdk-nbt'

export function toJson(object: any) {
    return Object.entries(object).reduce(
        (s: any, [k, v]) => {
            s[k] = typeof v === 'object' ? (<any>v).toJson() : v
            return s
        },
        {}
    )
}

interface IMCParams {
    [name: string]: string | number | string[] | number[]
}

/**
 * 格式化mc参数
 * @param params mc参数
 */
export function formatMCParams(params: IMCParams | undefined): string {
    if (params === undefined) {
        return ''
    }
    const format = (k: string, v: string | number) => `${k}=${v},`
    
    const result = Object.keys(params).reduce((s, k) => {
        const v = params[k]
        if (Array.isArray(v)) {
            s += (v as string[]).reduce((ss, vv) => {
                ss += format(k, vv)
                return ss
            }, '')
        } else {
            s += format(k, v)
        }
        return s
    }, '')
    return result.slice(0, -1)
}

/**
 * 格式化分数区间，例如 ..10
 * @param range 分数区间
 */
export function formatScoreRange(range: ScoreRange) {
    const [a, b] = range
    return `${a === undefined ? '' : a}..${b === undefined ? '' : b}`
}