import { FileAbstract } from "@core/file"
import { __MDK__DEV__ } from "@dev/index"

let __ActiveFileStackStack: FileAbstract<any>[] = []

/**
 * 缓存file对象
 */
export function pushFile(file: FileAbstract<any>) {
    __ActiveFileStackStack.push(file)
}

export function popFile() {
    __ActiveFileStackStack.pop()
}

/**
 * 获取当前file对象
 */
export function useFile(): FileAbstract<any> {
    const stack = __ActiveFileStackStack
    if (!stack.length && process.env.__DEV__) {
        stack.push(__MDK__DEV__.file)
    }
    return stack[stack.length - 1]
}