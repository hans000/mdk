import { File } from 'mdk-core';
import { TimeScale, TimeUnit, QueryType } from "../function/time";
import { time as timex } from "../function";
import { int } from 'mdk-nbt';
import { ContextAbstract } from "mdk-core";

export class Time extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    /**
     * 增加时间
     * @param time 时间
     */
    public add(time: int | TimeScale) {
        this.context.add(timex.add(time))
    }

    /**
     * 查询时间
     * @param queryType 查询类型
     */
    public query(queryType: QueryType) {
        this.context.add(timex.query(queryType))
    }

    /**
     * 设置时间
     * @param time 时间
     */
    public set(time: int): void
    public set(time: int, unit: TimeUnit): void
    public set(time: int, unit?: TimeUnit) {
        this.context.add(timex.set(time, unit))
    }
}