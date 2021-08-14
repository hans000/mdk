import { FileAbstract } from "@core/file"
import { __MDK__DEV__ } from "@dev/index"

let __activeFile: FileAbstract<any> = null

export function setFile(file: FileAbstract<any>) {
    __activeFile = file
}

/**
 * 获取当前file对象
 */
export function useFile() {
    if (!__activeFile && process.env.__DEV__) {
        __activeFile = __MDK__DEV__.file
    }
    return __activeFile
}