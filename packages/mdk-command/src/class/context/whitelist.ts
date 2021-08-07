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
    }

    /**
     * 将玩家名添加到白名单。该玩家不需要在线。
     * @param player 玩家
     */
    public remove(player: Selector) {
        this.context.add(whitelist.remove(player))
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