import { BlockEntityBase } from "@shared/__/BlockEntity";
import { bit, int, long } from "@shared/__/numberic";
import { Facing6State } from "@shared/state/facing";

export type CommandBlockId =
    | 'command_block'
    | 'chain_command_block'
    | 'repeating_command_block'

export interface CommandBlockState extends Facing6State {
    /** 条件制约模式 */
    conditional: boolean
}

export interface CommandBlock extends BlockEntityBase {
    /** 命令方块名称 */
    CustomName?: string
    /** 命令 */
    Command: string
    /** 模拟信号强度 */
    SuccessCount: int
    /** 上一条命令方块生成的输出 */
    LastOutput: string
    /** 决定LastOutput是否储存 */
    TrackOutput: bit
    /** 决定命令方块现在的状态是否被红石所激活 */
    powered: bit
    /** 自动激活 */
    auto: bit
    /** 条件制约 */
    conditionMet: bit
    /** 是否一刻内运行多次，默认1 */
    UpdateLastExecution: bit
    /** 储存一个连锁型命令方块最后被执行的游戏刻 */
    LastExecution: long
}