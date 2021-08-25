import { Pack } from "@core/Pack"

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
    return __ActivePack
}