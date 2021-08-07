import { int } from 'mdk-nbt';
import { File } from 'mdk-core';
import { weather } from "../function";
import { ContextAbstract } from "mdk-core";

export class Weather extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    /**
     * 将天气设为晴天。
     */
    public clear(): void
    /**
     * 将天气设为晴天。
     * @param duration 持续时间
     */
    public clear(duration: int): void
    public clear(duration?: int) {
        this.context.add(weather.clear(duration))
    }

    /**
     * 将天气设为雨天（寒冷的生物群系会下雪）。
     */
    public rain(): void
    /**
     * 将天气设为雨天（寒冷的生物群系会下雪）。
     * @param duration 持续时间
     */
    public rain(duration: int): void
    public rain(duration?: int) {
        this.context.add(weather.rain(duration))
    }

    /**
     * 将天气设为雷暴雨（寒冷的生物群系会下雷暴雪）。
     */
    public thunder(): void
    /**
     * 将天气设为雷暴雨（寒冷的生物群系会下雷暴雪）。
     * @param duration 持续时间
     */
    public thunder(duration: int): void
    public thunder(duration?: int) {
        this.context.add(weather.thunder(duration))
    }
}
