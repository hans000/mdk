import { File } from "@core/file"

let __file: File = null;

export class __MDK__DEV__ {
    public static get file() {
        if (__file) { return __file }
        __file = new File('mdk-dev-file')
        //@ts-ignore
        __file.__DEV__ = true
        return __file
    }
    
    public static clear() { __file = null }
}