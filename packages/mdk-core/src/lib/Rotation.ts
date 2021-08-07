import { RotationModifier } from 'mdk-nbt';
import parseRotation from "@utils/parse/rotation";

function formatRotation(rotList: number[], modifier: RotationModifier) {
    return rotList.reduce((s, v) => {
        if (modifier && !+v) v = '' as any
        return s += `${modifier}${v} `
    }, '').trim()
}

export function rotation(): Rotation
export function rotation(text: string): Rotation
export function rotation(x: number, y: number): Rotation
export function rotation(a?: any, b?: number) {
    const args = [a, b].slice(0, arguments.length) as []
    return new Rotation(...args)
}

/**
 * 旋转类
 */
export class Rotation {
    /** x */
    public x: number;
    /** y */
    public y: number;

    public static east = -90
    public static south = 0
    public static west = 90
    public static north = 180

    public static copy(rotation: Rotation) {
        return new Rotation(...rotation.toArray())
    }

    constructor()
    constructor(text: string)
    constructor(x: number, y: number)
    constructor(a?: string | number, b?: number) {
        let x = 0, y = 0
        if (arguments.length === 2) {
            x = a as number
            y = b
        } else if (arguments.length === 1) {
            const xy = parseRotation(a as string)
            x = xy[0]
            y = xy[1]
        }
        this.x = x
        this.y = y
    }

    public merge(rotation: Rotation): Rotation
    public merge(offset: [number, number]): Rotation
    public merge(arg: Rotation | [number, number]) {
        if (arg instanceof Rotation) {
            this.x = arg.x
            this.y = arg.y
        } else {
            this.x = arg[0]
            this.y = arg[1]
        }
        return this
    }

    public translate(rotation: Rotation): Rotation
    public translate(offset: number): Rotation
    public translate(offset: [number, number]): Rotation
    public translate(arg: [number, number] | Rotation | number): Rotation {
        let x = this.x, y = this.y
        if (arg instanceof Rotation) {
            x += arg.x
            y += arg.y
        } else if (typeof arg === 'number') {
            x += arg
            y += arg
        } else {
            x += arg[0] || 0
            y += arg[1] || 0
        }
        return new Rotation(x, y)
    }

    public multiply(matrix: number): Rotation
    public multiply(matrix: [number, number]): Rotation
    public multiply(matrix: [number, number] | number) {
        let x = this.x, y = this.y
        if (Array.isArray(matrix)) {
            x *= matrix[0]
            y *= matrix[1]
        } else {
            x *= matrix
            y *= matrix
        }
        return new Rotation(x, y)
    }
    public getOffset(rotation: Rotation) {
        const dx = rotation.x - this.x
        const dy = rotation.y - this.y
        return [dx, dy]
    }
    public toArray(): [number, number] {
        return [this.x, this.y]
    }
    public toString(modifier: RotationModifier = '') {
        return formatRotation(Object.values(this), modifier)
    }
    public toRelative() {
        return formatRotation(Object.values(this), '~')
    }
    public toAbsolute() {
        return formatRotation(Object.values(this), '')
    }
    public toNbtString() {
        return `rotation_x=${this.x},rotation_y=${this.y}`
    }
}
