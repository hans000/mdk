import { ContextAbstract, File, Selector } from "mdk-core";
import { team } from "../../function";

export class Team extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    /**
     * 创建一个新队伍。
     * @param teamName 队伍名
     */
    public add(teamName: string): void
    /**
     * 创建一个新队伍。
     * @param teamName 队伍名
     * @param displayName 展示名称
     */
    public add(teamName: string, displayName: string): void
    public add(teamName: string, displayName?: string) {
        this.context.add(team.add(teamName, displayName))
    }
    
    /**
     * 移除目标队伍中所有的成员。
     * @param teamName 队伍名
     */
    public empty(teamName: string) {
        this.context.add(team.empty(teamName))
    }
    
    /**
     * 使目标玩家或实体离开队伍。
     * @param teamName 队伍名
     */
    public join(teamName: string): void
    /**
     * 使目标玩家或实体离开队伍。
     * @param teamName 队伍名
     * @param member 成员
     */
    public join(teamName: string, member?: Selector): void
    public join(teamName: string, member?: Selector) {
        this.context.add(team.join(teamName, member))
    }
    
    /**
     * 使目标玩家或实体离开队伍。
     * @param teamName 队伍名
     */
    public leave(member: Selector) {
        this.context.add(team.leave(member))
    }
    
    /**
     * 列出所有队伍。当队伍名指定时，列出属于该队伍的所有成员。
     */
    public list(): void
    /**
     * 列出所有队伍。当队伍名指定时，列出属于该队伍的所有成员。
     * @param teamName 队伍名
     */
    public list(teamName?: string): void
    public list(teamName?: string) {
        this.context.add(team.list(teamName))
    }
    
    /**
     *  将目标队伍选项的值修改为指定值。
     * @param teamName 队伍名
     */
    public modify(teamName: string, criteria: string, value: number) {
        this.context.add(team.modify(teamName, criteria, value))
    }
}