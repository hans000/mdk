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
    public functionName(functionName: string | File, time: string, mode: ScheduleMode = 'append') {
        this.context.add(schedule.functionName(functionName.toString(), time, mode))
    }
    
    /**
     * 将等待运行的函数从等待队伍中删除。
     * @param functionName 函数名
     */
    public clear(functionName: string | File) {
        this.context.add(schedule.clear(functionName.toString()))
    }
}