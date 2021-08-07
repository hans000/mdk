import { float, int } from 'mdk-nbt';
import { File } from 'mdk-core';
import { worldborder } from "../function"
import { ContextAbstract } from "mdk-core";

export class WorldBorder extends ContextAbstract {
    public readonly damage = {
        amount: (damage: float) => this.amount(damage),
        buffer: (distance: int) => this.buffer(distance),
    }
    public readonly warning = {
        distance: (distance: int) => this.distance(distance),
        time: (distance: int) => this.time(distance),
    }

    constructor(context: File) {
        super(context)
    }

    public get() {
        this.context.add(worldborder.get())
    }
    /**
     * 增减世界边界的直径，即正方形边长
     * @param distance 距离
     */
    public add(distance: int): void
    /**
     * 增减世界边界的直径，即正方形边长
     * @param distance 距离
     * @param time 时间
     */
    public add(distance: int, time: int): void
    public add(distance: int, time?: int) {
        this.context.add(worldborder.add(distance, time))
    }

    /**
     * 获取世界边界的中心
     */
    public center(): void
    /**
     * 设置世界边界的中心
     * @param location 坐标 x z
     */
    public center(location: string): void
    public center(location?: string) {
        this.context.add(worldborder.center(location))
    }

    /**
     * 设置世界边界的直径大小
     * @param distance 距离
     */
    public set(distance: int): void
    /**
     * 设置世界边界的直径大小
     * @param distance 距离
     * @param time 时间
     */
    public set(distance: int, time: int): void
    public set(distance: int, time?: int) {
        this.context.add(worldborder.set(distance, time))
    }

    /**
     * 指定世界边界外伤害速度
     * @param damage 伤害
     */
    private amount(damage: float) {
        this.context.add(worldborder.damage.amount(damage))
    }

    /**
     * 指定世界边界伤害缓冲区距离
     * @param distance 距离
     */
    private buffer(distance: int) {
        this.context.add(worldborder.damage.buffer(distance))
    }

    /**
     * 指定世界边界出现警告的距离
     * @param distance 距离
     */
    private distance(distance: int) {
        this.context.add(worldborder.warning.distance(distance))
    }

    /**
     * 指定世界边界的警告时间
     * @param time 时间
     */
    private time(time: int) {
        this.context.add(worldborder.warning.time(time))
    }
}
