import { File } from "@core/file"
import { Pack } from "@core/Pack";

let __file: File = null;
let __pack: Pack = null;

export class __MDK__DEV__ {

    public static get file() {
        if (__file) { return __file }
        __file = new File({
            filename: 'mdk-dev-file',
            render() {}
        })
        //@ts-ignore
        __file.__DEV__ = true
        return __file
    }

    public static get pack() {
        if (__pack) { return __pack }
        __pack = new Pack({
            packname: 'mdk-dev-pack',
        })
        //@ts-ignore
        __pack.__DEV__ = true
        return __pack
    }
    
    public static clear() { __pack = null }
}