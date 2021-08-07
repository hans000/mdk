import { File, ContextAbstract } from 'mdk-core';
import { schedule } from "../function"
import { ScheduleMode } from "../function/schedule"

export class Schedule extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }
    /**
     * 将函数列入队伍。
     * @param functionName 函数名
     * @param time 时间
     * @param mode 模式
     */
    public functionName(functionName: string, time: string, mode: ScheduleMode) {
        this.context.add(schedule.functionName(functionName, time, mode))
    }
    /**
     * 将等待运行的函数从等待队伍中删除。
     * @param functionName 函数名
     */
    public clear(functionName: string) {
        this.context.add(schedule.clear(functionName))
    }
}