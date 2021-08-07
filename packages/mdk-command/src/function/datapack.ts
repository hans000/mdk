export type PackSortType = 'first' | 'last'
export type PackListType = 'available' | 'enabled'
export type PackPosType = 'before' | 'after'

export default {
    disable,
    enable,
    list,
}

/**
 * 禁用指定数据包
 * @param packName 数据包名字
 */
function disable(packName: string) {
    return `datapack disable ${packName}`
}
/**
 * 启用指定数据包
 * @param packName 数据包名字
 */
function enable(packName: string): string;
/**
 * 启用指定数据包
 * @param packName 数据包名字
 * @param sort 排序 'first' | 'last'
 */
function enable(packName: string, sort: PackSortType): string;
/**
 * 启用指定数据包
 * @param packName 数据包名字
 * @param pos 先后 'before' | 'after'
 * @param existName 已开启的数据包名字 
 */
function enable(packName: string, pos: PackPosType, existName: string): string;
function enable(packName: string, sort?: PackSortType | PackPosType, existName?: string) {
    // TODO 
    // if (!global.packManager.exist(packName)) {
    //     throw new Error(`没有${packName}数据包`)
    // }
    if (sort as PackSortType) {
        return `datapack enable ${packName} ${sort}`
    }
    if (sort as PackPosType) {
        return `datapack enable ${packName} ${sort} ${existName}`
    }
    return `datapack enable ${packName}`
}

function list(): string;
function list(listType: PackListType): string;
function list(listType?: PackListType) {
    if (listType as PackListType) {
        return `datapack list ${listType}`
    }
    return `datapack list`
}