import { formatMCParams, formatScoreRange } from 'mdk-core';
import { ScoreRange } from 'mdk-nbt';
import { Execute } from './Execute';

export interface IBlockState {
    [state: string]: string | number
}
export class Logic {
    readonly #context: Execute;

    constructor(context: Execute) {
        this.#context = context;
    }

    public block(blockID = 'air', axis = '~ ~ ~', blockState?: IBlockState) {
        this.#context.getTextObject().add(`block ${axis} ${blockID}[${formatMCParams(blockState)}]`)
        return this.#context;
    }
    public blocks() {
        this.#context.getTextObject().add('blocks')
        return this.#context;
    }
    public data() {
        this.#context.getTextObject().add('data');
        return this.#context;
    }
    /**
     * 探测实体
     * @param target 选择器
     */
    public entity(target?: string) {
        target = target ? target : 'mdk-core'
        this.#context.getTextObject().add(`entity ${target}`)
        return this.#context;
    }
    /**
     * 探测分数
     */
    public score(target: string, targetObjective: string, source: string, srouceObjective: string, operation: string) {
        this.#context.getTextObject().add(`score ${target} ${targetObjective} ${operation} ${source} ${srouceObjective}`)
        return this.#context;
    }
    /**
     * 探测分数
     */
    public scoreMatches(target: string, range: ScoreRange) {
        this.#context.getTextObject().add(`score ${target} matches ${formatScoreRange(range)}`)
        return this.#context;
    }
    /**
     * 探测谓词
     * @param name 谓词名称
     */
    public predicate(name: string) {
        this.#context.getTextObject().add(`predicate ${name}`)
        return this.#context;
    }
}