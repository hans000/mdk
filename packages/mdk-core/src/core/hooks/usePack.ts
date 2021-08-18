import { Pack } from "@core/Pack"
import { __MDK__DEV__ } from "@dev/index"

let __activePack: Pack = null

/**
 * 设置当前pack对象
 */
export function setPack(pack: Pack) {
    __activePack = pack
}

/**
 * 获取当前pack对象
 */
export function usePack() {
    // if (!__activePack && process.env.__DEV__) {
    //     __activePack = __MDK__DEV__.pack
    // }
    return __activePack
}