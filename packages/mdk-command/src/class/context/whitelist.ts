import { File, Selector, ContextAbstract } from 'mdk-core'
import { whitelist } from "../../function";

export class WhiteList extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    /**
     * 将玩家名添加到白名单。该玩家不需要在线。
     * @param player 玩家
     */
    public add(player: Selector) {
        this.context.add(whitelist.add(player))
        return this
    }

    /**
     * 将玩家名添加到白名单。该玩家不需要在线。
     * @param player 玩家
     */
    public remove(player: Selector) {
        this.context.add(whitelist.remove(player))
        return this
    }

    public list() {
        this.context.add(whitelist.list())
        return this
    }

    public off() {
        this.context.add(whitelist.off())
        return this
    }
    
    public on() {
        this.context.add(whitelist.on())
        return this
    }
    
    public reload() {
        this.context.add(whitelist.reload())
        return this
    }
}