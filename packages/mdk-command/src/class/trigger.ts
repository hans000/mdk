import { int } from 'mdk-nbt'
import { File, ContextAbstract } from 'mdk-core';
import { trigger } from "../function"

export class Trigger extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }
   
    /**
     *  将新值追加到当前目标值上。
     * @param critera 目标
     * @param value 值
     */
    public add(critera: string, value: int) {
        this.context.add(trigger.add(critera, value))
        return this
    }
   
    /**
     *  将目标的当前值重设为新值。
     * @param critera 目标
     * @param value 值
     */
    public set(critera: string, value: int) {
        this.context.add(trigger.set(critera, value))
        return this
    }
}