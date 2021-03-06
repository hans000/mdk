import { ArgumentExpection, formatMCParams, formatScoreRange } from 'mdk-core';
import { Selector } from 'mdk-core';
import { BlockEntityState, ScoreRange } from 'mdk-nbt';
import Execute from './Execute';

export default class Logic {
    readonly #context: Execute;

    constructor(context: Execute) {
        this.#context = context;
    }

    public block(blockID = 'air', axis = '~ ~ ~', blockState?: BlockEntityState) {
        this.#context.add(`block ${axis} ${blockID}[${formatMCParams(blockState as any)}]`) // TODO 处理any类型
        return this.#context;
    }
   
    public blocks() {
        this.#context.add('blocks')
        return this.#context;
    }
  
    public data() {
        this.#context.add('data');
        return this.#context;
    }
  
    /**
     * 探测实体
     * @param selector 选择器
     */
    public entity(selector?: string | Selector) {
        if (selector) {
            this.#context.add(`entity ${selector}`)
        } else {
            this.#context.add(`entity @s`)
        }
        return this.#context;
    }
 
    /**
     * 探测分数
     */
    public score(target: string, targetObjective: string, source: string, srouceObjective: string, operation: string) {
        this.#context.add(`score ${target} ${targetObjective} ${operation} ${source} ${srouceObjective}`)
        return this.#context;
    }
  
    /**
     * 探测分数
     */
    public scoreMatches(range: ScoreRange): Execute;
    public scoreMatches(selector: string | Selector, range: ScoreRange): Execute;
    public scoreMatches(a: string | Selector | ScoreRange, b?: ScoreRange) {
        if (b) {
            this.#context.add(`score ${a.toString()} matches ${formatScoreRange(b)}`)
        } else {
            throw ArgumentExpection('missing required parameters')
        }
        return this.#context;
    }
  
    /**
     * 探测谓词
     * @param name 谓词名称
     */
    public predicate(name: string) {
        this.#context.add(`predicate ${name}`)
        return this.#context;
    }
}