import { formatMCParams, formatScoreRange, OperationType, Selector } from 'mdk-core';
import { BlockEntityState, ScoreRange } from 'mdk-nbt';
import { BlockItemId } from '../../../../../mdk-nbt/dist/item/__';
import { Execute } from './Execute';

export type ConditionFn = (context: Logic) => Execute

export class Logic {
    readonly #context: Execute;

    constructor(context: Execute) {
        this.#context = context;
    }

    public block(blockID: BlockItemId = 'air', coordicate = '~ ~ ~', blockState?: BlockEntityState) {
        this.#context.getTextObject().add(`block ${coordicate} ${blockID}[${formatMCParams(blockState as any)}]`)
        return this.#context;
    }
    public blocks(start: string, end: string, dest: string, mode: 'all' | 'masked' = 'all') {
        this.#context.getTextObject().add('blocks', start, end, dest, mode)
        return this.#context;
    }
    public dataBlock(pos: string, path: string) {
        this.#context.getTextObject().add('data', 'block', pos, path);
        return this.#context;
    }
    public dataEntity(target: string | Selector, path: string) {
        this.#context.getTextObject().add('data', 'entity', target.toString(), path);
        return this.#context;
    }
    public dataStorage(source: string, path: string) {
        this.#context.getTextObject().add('data', 'storage', source, path);
        return this.#context;
    }
    /**
     * 探测实体
     * @param target 选择器
     */
    public entity(target: string | Selector = '@s') {
        this.#context.getTextObject().add(`entity ${target.toString()}`)
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
    /**
     * 探测分数
     */
    public score(target: string | Selector, targetObjective: string, source: string, srouceObjective: string, operation: OperationType) {
        this.#context.getTextObject().add(`score ${target.toString()} ${targetObjective} ${operation} ${source} ${srouceObjective}`)
        return this.#context;
    }
    /**
     * 探测分数
     */
    public scoreMatches(target: string | Selector, range: ScoreRange) {
        this.#context.getTextObject().add(`score ${target.toString()} matches ${formatScoreRange(range)}`)
        return this.#context;
    }
}