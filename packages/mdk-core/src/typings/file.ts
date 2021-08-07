import { __MDK__DEV__ } from '@/__dev__'

declare module '../core/file/function/File' {
    interface File {
        /** 开发环境 */
        __DEV__: boolean
    }
}
