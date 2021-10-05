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
    public clear(): Weather
    /**
     * 将天气设为晴天。
     * @param duration 持续时间
     */
    public clear(duration: int): Weather
    public clear(duration?: int) {
        this.context.add(weather.clear(duration))
        return this
    }

    /**
     * 将天气设为雨天（寒冷的生物群系会下雪）。
     */
    public rain(): Weather
    /**
     * 将天气设为雨天（寒冷的生物群系会下雪）。
     * @param duration 持续时间
     */
    public rain(duration: int): Weather
    public rain(duration?: int) {
        this.context.add(weather.rain(duration))
        return this
    }

    /**
     * 将天气设为雷暴雨（寒冷的生物群系会下雷暴雪）。
     */
    public thunder(): Weather
    /**
     * 将天气设为雷暴雨（寒冷的生物群系会下雷暴雪）。
     * @param duration 持续时间
     */
    public thunder(duration: int): Weather
    public thunder(duration?: int) {
        this.context.add(weather.thunder(duration))
        return this
    }
}
