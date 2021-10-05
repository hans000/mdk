import { Pack } from "@core/Pack"
import { __MDK__DEV__ } from "@dev/index"

let __ActivePack: Pack = null

/**
 * 设置当前pack对象
 */
export function setPack(pack: Pack) {
    __ActivePack = pack
}

/**
 * 获取当前pack对象
 */
export function usePack() {
    if (!__ActivePack && process.env.__DEV__) {
        return __MDK__DEV__.pack
    }
    return __ActivePack
}