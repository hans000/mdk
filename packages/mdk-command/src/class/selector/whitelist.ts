import { File } from 'mdk-core';
import { Selector } from 'mdk-core';
import { whitelist } from "../../function";
import { ContextAbstract } from "mdk-core";

export class WhiteList extends ContextAbstract {
    readonly #target: Selector

    constructor(context: File, target: Selector) {
        super(context)
        this.#target = target
        target.unexacted()
    }

    /**
     * 将玩家名添加到白名单。该玩家不需要在线。
     */
    public add() {
        this.context.add(whitelist.add(this.#target))
    }

    /**
     * 将玩家名添加到白名单。该玩家不需要在线。
     */
    public remove() {
        this.context.add(whitelist.remove(this.#target))
    }

    public list() {
        this.context.add(whitelist.list())
    }

    public off() {
        this.context.add(whitelist.off())
    }
    
    public on() {
        this.context.add(whitelist.on())
    }
    
    public reload() {
        this.context.add(whitelist.reload())
    }
}