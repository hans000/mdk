import { LocationModifier } from 'mdk-nbt';
import { Location, LocationInterface } from "./Location";

export function area(from: Location, to: Location) {
    return new Area(from, to)
}

export class Area {

    /**
     * 通过两点生成一个Area对象
     * @param from 起点坐标
     * @param to 终点坐标
     */
    public static fromLocations(from: LocationInterface, to: LocationInterface) {
        return new Area(Location.from(from), Location.from(to))
    }

    /**
     * 通过一个点和一个范围生成Area对象
     * @param from 起点坐标
     * @param range 范围
     */
    public static fromRange(from: Location, range: number): Area
    public static fromRange(from: Location, range: [number, number, number]): Area
    public static fromRange(from: Location, range: [number, number, number] | number) {
        return new Area(from, new Location(range as number))
    }

    public static toRangeNbtString(dx: number, dy: number, dz: number) {
        return `dx=${dx},dy=${dy},dz=${dz}`
    }

    private from: Location
    private to: Location

    constructor(from: Location, to: Location) {
        this.from = from
        this.to = to
    }

    /**
     * 获取起始节点坐标
     */
    public getFromLocation() {
        return this.from
    }

    /**
     * 获取结束节点坐标
     */
    public getToLocation() {
        return this.to
    }

    /**
     * @param range 范围
     */
    public fromRange(range: number): Area
    public fromRange(range: [number, number, number]): Area
    public fromRange(range: [number, number, number] | number) {
        return new Area(this.from, new Location(range as number))
    }

    /**
     * 序列化
     * @param modifier 标识符
     */
    public toJson(modifier: LocationModifier = '') {
        return {
            from: this.from.toString(modifier),
            to: this.to.toString(modifier),
        }
    }

    /**
     * 格式化，如：1 1 1 10 10 10
     * @param modifier 标识符
     */
    public toString(modifier: LocationModifier = '') {
        return `${this.from.toString(modifier)} ${this.to.toString(modifier)}`
    }
    public getRange(): [number, number, number] {
        return this.from.getRange(this.to)
    }
    /**
     * 计算to和from的差值并格式化，如：dx=1,dy=2,dz=3
     */
    public toRangeNbtString() {
        const [dx, dy, dz] = this.getRange()
        return `dx=${dx},dy=${dy},dz=${dz}`
    }
}