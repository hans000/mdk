import { ContextAbstract } from "./ContextAbstract";
import { CommandText } from "./CommandText";
import { File } from "@core/file";

export abstract class CommandAbstract extends ContextAbstract {
    protected result: CommandText;

    constructor(context: File, cmdName: string) {
        super(context)
        this.result = new CommandText(cmdName) 
    }
    public getTextObject() {
        return this.result
    }
}