import { JText } from "@lib/index"
import { FileAbstract } from "./file/FileAbstract"
import { Pack } from "./Pack"

export interface PackOptions {
    /** 包名 */
    packname: string
    /** 加载的模块 */
    files: FileAbstract<any>[]
    /** 游戏版本，应用于mcmeta.json */
    version?: string
    /** 描述，应用于mcmeta.json */
    description?: string | JText
    /** 是否开启作用域 */
    scope?: string | boolean
    /** 数据包 */
    // packs?: Pack[]
    /** 子模块 */
    modules?: Pack[]
}

/**
 * 创建一个数据包
 * @param packOptions 配置项
 */
export function createPack(packOptions: PackOptions) {
    const { files, ...rest } = packOptions
    const pack = new Pack(rest)
    pack.add(files)
    return pack
}