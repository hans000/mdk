import { formatMCParams, formatScoreRange } from 'mdk-core';
import { Execute } from './Execute';
import { Selector } from 'mdk-core';
import { ScoreRange } from 'mdk-nbt';
import { ArgumentExpection } from 'mdk-core/src/expection';

export interface IBlockState {
    [state: string]: string | number
}

export class Logic {
    readonly #context: Execute;
    readonly #target: Selector;

    constructor(context: Execute, target?: Selector) {
        this.#context = context;
        this.#target = target;
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
     * @param selector 选择器
     */
    public entity(selector?: string | Selector) {
        if (this.#target) {
            this.#context.getTextObject().add(`entity ${selector.toString()}`)
        } else if (selector) {
            this.#context.getTextObject().add(`entity ${selector}`)
        } else {
            this.#context.getTextObject().add(`entity @s`)
        }
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
    public scoreMatches(range: ScoreRange): Execute;
    public scoreMatches(selector: string | Selector, range: ScoreRange): Execute;
    public scoreMatches(a: string | Selector | ScoreRange, b?: ScoreRange) {
        if (b) {
            this.#context.getTextObject().add(`score ${a.toString()} matches ${formatScoreRange(b)}`)
        } else {
            if (this.#target) {
                this.#context.getTextObject().add(`score ${this.#target.toString()} matches ${formatScoreRange(a as ScoreRange)}`)
            } else {
                ArgumentExpection('缺少参数')
            }
        }
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