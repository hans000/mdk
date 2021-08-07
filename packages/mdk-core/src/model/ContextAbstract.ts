import { File } from "@core/file";

export abstract class ContextAbstract {
    #context: File;

    constructor(context: File) {
        this.#context = context
    }
    /** 获取上下文对象 */
    public get context() {
        return this.#context
    }
    /** 设置上下文对象 */
    public setContext(context: File) {
        this.#context = context
        return this
    }
}