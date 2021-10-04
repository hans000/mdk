import { File, ContextAbstract, CommandAbstract } from "mdk-core";
import { GetLogic, GetLogicFn } from "./GetLogic";
import { MergeLogic, MergeLogicFn } from "./MergeLogic";
import { ModifyLogicFn, ModifyLogic } from "./ModifyLogic";
import { RemoveLogic, RemoveLogicFn } from "./RemoveLogic";

export class Data extends CommandAbstract {

    constructor(context: File) {
        super(context, '')
    }

    public get(fn: GetLogicFn) {
        return fn(new GetLogic(this))
    }

    public merge(fn: MergeLogicFn) {
        return fn(new MergeLogic(this))
    }

    public remove(fn:RemoveLogicFn) {
        return fn(new RemoveLogic(this))
    }

    public modify(fn: ModifyLogicFn) {
        return fn(new ModifyLogic(this))
    }
}