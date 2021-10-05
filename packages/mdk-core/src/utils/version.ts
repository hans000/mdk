import { ArgumentExpection } from "@tools/expection"

function isValidVersion(version: string) {
    return /^\d\.\d{1,2}(\.\d{1,2})?$/.test(version)
}

export function versionCompare(v1: string, v2: string) {
    if (! isValidVersion(v1)) {
        throw ArgumentExpection('`', v1, '` version format error')
    }
    if (! isValidVersion(v2)) {
        throw ArgumentExpection('`', v1, '` version format error')
    }
    const [v11, v12, v13] = v1.split('.')
    const [v21, v22, v23] = v2.split('.')
    const V1 = +v11 << 16 | +v12 << 8 | +v13
    const V2 = +v21 << 16 | +v22 << 8 | +v23
    return V1 > V2 ? 1 : V1 === V2 ? 0 : -1
}