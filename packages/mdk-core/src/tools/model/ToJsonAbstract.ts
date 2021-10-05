import { LineInfo } from ".";

export abstract class ToJsonAbstract {
    /** 序列化 */
    public abstract toJson(): LineInfo
}