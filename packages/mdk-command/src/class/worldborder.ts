import { float, int } from 'mdk-nbt';
import { File } from 'mdk-core';
import { worldborder } from "../function"
import { ContextAbstract } from "mdk-core";

export class WorldBorder extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public get() {
        this.context.add(worldborder.get())
        return this
    }
    /**
     * 增减世界边界的直径，即正方形边长
     * @param distance 距离
     */
    public add(distance: int): WorldBorder
    /**
     * 增减世界边界的直径，即正方形边长
     * @param distance 距离
     * @param time 时间
     */
    public add(distance: int, time: int): WorldBorder
    public add(distance: int, time?: int) {
        this.context.add(worldborder.add(distance, time))
        return this
    }

    /**
     * 获取世界边界的中心
     */
    public center(): WorldBorder
    /**
     * 设置世界边界的中心
     * @param location 坐标 x z
     */
    public center(location: string): WorldBorder
    public center(location?: string) {
        this.context.add(worldborder.center(location))
        return this
    }

    /**
     * 设置世界边界的直径大小
     * @param distance 距离
     */
    public set(distance: int): WorldBorder
    /**
     * 设置世界边界的直径大小
     * @param distance 距离
     * @param time 时间
     */
    public set(distance: int, time: int): WorldBorder
    public set(distance: int, time?: int) {
        this.context.add(worldborder.set(distance, time))
        return this
    }

    /**
     * 指定世界边界外伤害速度
     * @param damage 伤害
     */
    public amount(damage: float) {
        this.context.add(worldborder.damage.amount(damage))
        return this
    }

    /**
     * 指定世界边界伤害缓冲区距离
     * @param distance 距离
     */
    public buffer(distance: int) {
        this.context.add(worldborder.damage.buffer(distance))
        return this
    }

    /**
     * 指定世界边界出现警告的距离
     * @param distance 距离
     */
    public distance(distance: int) {
        this.context.add(worldborder.warning.distance(distance))
        return this
    }

    /**
     * 指定世界边界的警告时间
     * @param time 时间
     */
    public time(time: int) {
        this.context.add(worldborder.warning.time(time))
        return this
    }
}