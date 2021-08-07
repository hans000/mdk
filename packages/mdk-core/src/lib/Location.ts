import { LocationModifier } from 'mdk-nbt';
import parseLocation from "@utils/parse/location";

function formatLocation(locationList: number[], modifier: LocationModifier) {
    return locationList.reduce((s, v) => {
        if (modifier && !+v) v = '' as any
        return s += `${modifier}${v} `
    }, '').trim()
}

export interface LocationInterface {
    x: number
    y: number
    z: number
}


export function location(): Location
export function location(text: string): Location
export function location(xyz: number): Location
export function location(x: number, y: number, z: number): Location
export function location(a?: any, b?: number, c?: number) {
    const args = [a, b, c].slice(0, arguments.length) as []
    return new Location(...args)
}

/**
 * 坐标类
 */
export class Location {
    /** 坐标x */
    public x: number;
    /** 坐标y */
    public y: number;
    /** 坐标z */
    public z: number;

    public static from(x: number, y: number, z: number): Location
    public static from(location: LocationInterface): Location
    public static from(a: number | LocationInterface, b?: number, c?: number) {
        if (arguments.length === 3) {
            return new Location(a as number, b, c)
        }
        const { x, y, z } = a as LocationInterface
        return new Location(x, y, z)
    }

    // public static toNbtString(location: Location) {
    //     return location.toNbtString()
    // }
    
    constructor()
    constructor(text: string)
    constructor(xyz: number)
    constructor(x: number, y: number, z: number)
    constructor(a?: string | number, b?: number, c?: number) {
        let x = 0, y = 0, z = 0
        if (arguments.length === 1) {
            if (typeof a === 'string') {
                const xyz = parseLocation(a)
                x = xyz[0]
                y = xyz[1]
                z = xyz[2]
            } else {
                x = a
                y = a
                z = a
            }
        } else if (arguments.length === 3) {
            x = a as number
            y = b
            z = c
        }
        this.x = x
        this.y = y
        this.z = z
    }

    /**
     * 
     * @param location 
     */
    public merge(location: Location): Location
    public merge(range: [number, number, number]): Location
    public merge(arg: Location | [number, number, number]) {
        if (arg instanceof Location) {
            this.x += arg.x
            this.y += arg.y
            this.z += arg.z
        } else {
            this.x += arg[0]
            this.y += arg[1]
            this.z += arg[2]
        }
        return this
    }

    public translate(location: Location): Location
    public translate(offset: number): Location
    public translate(offset: [number, number, number]): Location
    public translate(arg: [number, number, number] | Location | number) {
        let x = this.x, y = this.y, z = this.z
        if (arg instanceof Location) {
            x += arg.x
            y += arg.y
            z += arg.z
        } else if (typeof arg === 'number') {
            x += arg
            y += arg
            z += arg
        } else {
            x += arg[0] || 0
            y += arg[1] || 0
            z += arg[2] || 0
        }
        return new Location(x, y, z)
    }

    public multiply(matrix: number): Location
    public multiply(matrix: [number, number, number]): Location
    public multiply(matrix: [number, number, number] | number) {
        let x = this.x, y = this.y, z = this.z
        if (Array.isArray(matrix)) {
            x *= matrix[0]
            y *= matrix[1]
            z *= matrix[2]
        } else {
            x *= matrix
            y *= matrix
            z *= matrix
        }
        return new Location(x, y, z)
    }
    /**
     * 计算两点的范围
     * @param location 一点的坐标
     */
    public getRange(location: Location): [number, number, number] {
        const dx = location.x - this.x
        const dy = location.y - this.y
        const dz = location.z - this.z
        return [dx, dy, dz]
    }
    /**
     * 序列化
     */
    public toJson() {
        return {
            x: this.x,
            y: this.y,
            z: this.z,
        }
    }
    /**
     * 生成坐标数组格式，形如：[0, 0, 0]
     */
    public toArray(): [number, number, number] {
        return [this.x, this.y, this.z]
    }
    public toString(modifier: LocationModifier = '') {
        return formatLocation(Object.values(this), modifier)
    }
    /**
     * 生成相对坐标格式，形如：~0 ~0 ~0
     */
    public toRelative() {
        return formatLocation(Object.values(this), '~')
    }
    /**
     * 生成绝对坐标格式，形如：0 0 0
     */
    public toAbsolute() {
        return formatLocation(Object.values(this), '')
    }
    /**
     * 生成本地坐标格式，形如：^0 ^0 ^0
     */
    public toLocal() {
        return formatLocation(Object.values(this), '^')
    }
    /**
     * 生成nbt格式，形如：x=0,d=0,z=0
     */
    public toNbtString() {
        return `x=${this.x},y=${this.y},z=${this.z}`
    }
}
