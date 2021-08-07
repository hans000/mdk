import { toHump } from "@utils/format"
import { ColorType } from "mdk-nbt"
import { ClickEventType } from "./ClickEvent"
import { HoverEventType } from "./HoverEvent"

interface TextFunction {
    (text: string): TextTokenType;
}

interface TextTokenType {
    readonly insertion: TextTokenType
    readonly font: (font: string) => TextTokenType
    readonly color: (color: string) => TextTokenType
    readonly separator: (sep: string) => TextTokenType

    readonly darkRed: TextTokenType
    readonly red: TextTokenType
    readonly gold: TextTokenType
    readonly yellow: TextTokenType
    readonly darkGreen: TextTokenType
    readonly green: TextTokenType
    readonly aqua: TextTokenType
    readonly darkAqua: TextTokenType
    readonly darkBlue: TextTokenType
    readonly blue: TextTokenType
    readonly white: TextTokenType
    readonly gray: TextTokenType
    readonly darkGray: TextTokenType
    readonly black: TextTokenType
    readonly darkPurple: TextTokenType
    readonly lightPurple: TextTokenType
    readonly reset: TextTokenType
    readonly underlined: TextTokenType
    readonly italic: TextTokenType
    readonly bold: TextTokenType
    readonly strikethrough: TextTokenType
    readonly obfuscated: TextTokenType

    readonly clickEvent: (clickEvent: ClickEventType) => TextTokenType
    readonly hoverEvent: (hoverEvent: HoverEventType) => TextTokenType

    readonly text: (text: string) => TextToken
    readonly selector: (selector: string) => TextToken
    readonly keybind: (keybind: string) => TextToken
    readonly translate: (translate: string, withArg?: string[]) => TextToken
    readonly score: (objective: string | number, name?: string) => TextToken
    readonly nbtBlock: (nbtPath: string, block: string, interpret?: number) => TextToken
    readonly nbtEntity: (nbtPath: string, entity: string, interpret?: number) => TextToken
    readonly nbtStorage: (nbtPath: string, storage: string, interpret?: number) => TextToken
}

export interface TextToken {
    /** 内容 */
    text?: string
    /** 翻译标识符的字符串 */
    translate?: string
    /** 列表内的参数将为译文中的变量赋值 */
    with?: string[]
    /** 颜色 */
    color?: ColorType
    /** 字体加粗 */
    bold?: boolean
    /** 字体斜体 */
    italic?: boolean
    /** 字体下划线 */
    underlined?: boolean
    /** 字体删除线 */
    strikethrough?: boolean
    /** 字体混淆 */
    obfuscated?: boolean
    /** 插入 */
    insertion?: boolean
    /** 点击事件 */
    clickEvent?: ClickEventType
    /** 悬浮事件 */
    hoverEvent?: HoverEventType
    score?: {
        /** 名字 */
        name: string
        /** 判据 */
        objective?: string
        /** 数值 */
        value?: number
    }
    /** 选择器 */
    selector?: string
    /** 键位标识符的字符串 */
    keybind?: string
    /** nbt */
    nbt?: string
    /** 原始JSON文本聊天组件并解析 */
    interpret?: string
    /** 方块实体的坐标 */
    block?: string
    /** 实体选择器 */
    entity?: string
    /** storage标签 */
    storage?: string
    /** 定义的字体渲染文本 */
    font?: string
    /** 替换在显示多个值时使用的符号 */
    separator?: string
}

export type Text = TextTokenType & TextFunction & {
    create: (config?: TextToken) => Text
}

function createInstance(defaultProps: TextToken = {}) {
    const __token = { __styler: { ...defaultProps } }
    Object.setPrototypeOf(builder, __token)

    function builder(this: any, text: string, key = 'text') {
        return { ...this.__styler, [key]: text, }
    }

    //#region logic
    const colorProps = ['dark_red', 'red', 'gold', 'yellow', 'dark_green', 'green', 'aqua', 'dark_aqua', 'dark_blue', 'blue', 'white', 'gray', 'dark_gray', 'black', 'dark_purple', 'light_purple', 'reset']

    colorProps.forEach(key => {
        Object.defineProperty(__token, toHump(key), {
            get() { 
                this.__styler.color = key
                return builder
            }
        })
    })

    const noArgProps = ['insertion', 'underlined', 'bold', 'italic', 'strikethougth', 'obfuscated']

    noArgProps.forEach(key => {
        Object.defineProperty(__token, key, {
            get() { 
                this.__styler[key] = key
                return builder
            }
        })
    })

    const oneArgProps = ['clickEvent', 'hoverEvent', 'font', 'separator', 'color']

    oneArgProps.forEach(key => {
        Object.defineProperty(__token, key, {
            get() {
                return (arg) => {
                    this.__styler[key] = arg
                    return builder
                }
            }
        })
    })
    
    Object.defineProperty(__token, 'text', {
        get() {
            return (text: string) => {
                const data = { ...this.__styler }
                this.__styler = { ...defaultProps }
                return { ...data, text, }
            }
        } 
    })

    Object.defineProperty(__token, 'translate', {
        get() {
            return (translate: string, withArg: string[]) => {
                const data = { ...this.__styler }
                this.__styler = { ...defaultProps }
                return { ...data, translate, with: withArg, }
            }
        }
    })

    Object.defineProperty(__token, 'score', {
        get() {
            return (arg: string, name = '*') => {
                const data = { ...this.__styler }
                this.__styler = { ...defaultProps }
                return {
                    ...data,
                    name,
                    [typeof arg === 'number' ? 'value' : 'score']: arg,
                }
            }
        }
    })

    Object.defineProperty(__token, 'keybind', {
        get() {
            return (keybind: string) => {
                const data = { ...this.__styler }
                this.__styler = { ...defaultProps }
                return { ...data, keybind, }
            }
        }
    })

    Object.defineProperty(__token, 'selector', {
        get() {
            return (selector: string) => {
                const data = { ...this.__styler }
                this.__styler = { ...defaultProps }
                return { ...data, selector, }
            }
        }
    })

    const nbtProps = ['Block', 'Entity', 'Storage']

    nbtProps.forEach(key => {
        Object.defineProperty(__token, 'nbt' + key, {
            get() {
                return (nbt: string, arg: string, interpret = false) => {
                    const data = { ...this.__styler }
                    this.__styler = { ...defaultProps }
                    return {
                        ...data,
                        nbt,
                        [key.toLowerCase()]: arg,
                        interpret,
                    }
                }
            }
        })
    })
    //#endregion

    return builder
}

const defaultInstance = createInstance()
Object.defineProperty(defaultInstance, 'create', { get() { return createInstance } })

export const Text = defaultInstance as Text