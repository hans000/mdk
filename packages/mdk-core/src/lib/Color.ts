import { int } from 'mdk-nbt'

export class Color {
    /**
     * 数字转HEX
     */
    public static int2hex(value: number) {
        return Color.rgb2hex(value >> 16, (value & 0x00ff00) >> 8, value & 0x0000ff)
    }
    /**
     * rgb转HEX
     */
    public static rgb2hex(r: int, g: int, b: int) {
        return `#${((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')}`
    }
}