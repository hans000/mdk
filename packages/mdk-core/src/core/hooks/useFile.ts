import { FileAbstract } from "@core/file"
import { __MDK__DEV__ } from "@dev/index"

let __ActiveFile: FileAbstract<any> = null

/**
 * 设置当前file对象
 */
export function setFile(file: FileAbstract<any>) {
    __ActiveFile = file
}

/**
 * 获取当前file对象
 */
export function useFile() {
    if (!__ActiveFile && process.env.__DEV__) {
        __ActiveFile = __MDK__DEV__.file
    }
    return __ActiveFile
}