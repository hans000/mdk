import { FieldExpection } from '../../../expection';
import { int, float, EnchantmentId, RangeObject } from 'mdk-nbt';
import path from '@utils/path';
import { FileAbstract, FileAbstractOptions, FileInfo } from '../FileAbstract';
import { emit } from '../../plugin';
import { ObjectMap } from '@typings/tool';
import { LoottableFile } from '@core/index';
import { DataObject } from '@typings/base';

type EntityTargetType = 'this' | 'killer' | 'killer_player'
export interface IPredicateItem {
    condition: string
    [name: string]: any
}

export type PredicateMap<D extends DataObject> = ObjectMap<PredicateFile<D>>
export type PredicateItemMap = ObjectMap<IPredicateItem>

export interface PredicateOptions<D extends DataObject = {}> extends FileAbstractOptions<D> {
    /** 渲染入口 */
    render: (context: PredicateFile<any>) => D | void
}
export class PredicateFile<D extends DataObject> extends FileAbstract<D> {
    #list: IPredicateItem[] = []

    constructor(options: PredicateOptions<D>) {
        super({
            filename: options.filename,
            namespace: options.namespace,
            description: options.description || '',
            render: options.render,
            type: 'predicates',
        })
        emit('init', this)
    }
    
    public override add(item: IPredicateItem) {
        this.#list = [item]
    }
    
    public override create(dir: string): FileInfo {
        super.load()
        const name = path.join(dir, this.fullname)
        if (!this.#list.length) {
            throw FieldExpection('`' + name + '` data is empty, please add one')
        }
        const text = JSON.stringify(this.#list[0], null, 4)
        return {
            name,
            type: 'predicate',
            text,
            extra: this.#list,
            description: this.description,
        }
    }
}

export class PredicateItem {
    /**
     * 将该列表中的每一个参数项用"or"连接起来
     */
    public static alternative(items: IPredicateItem[]) {
        return {
            condition: 'alternative',
            terms: items,
        }
    }
    /**
     * 把参数项中条件的判断结果取反
     */
    public static inverted(item: IPredicateItem) {
        return {
            condition: 'inverted',
            term: item,
        }
    }
    /**
     * 检查方块状态的属性 // TODO 方块状态
     */
    public static blockStateProperty(blockId: string, properties: any): IPredicateItem {
        return {
            condition: 'block_state_property',
            blockId,
            properties,
        }
    }
    /**
     * 检查伤害来源的属性
     */
    public static damageSourceProperties(damagePredicate: any): IPredicateItem {
        return {
            condition: 'damage_source_properties',
            predicate: damagePredicate
        }
    }
    /**
     * 实体的测试属性
     */
    public static entityProperties(entity: EntityTargetType, locationPredicate: any): IPredicateItem {
        return {
            condition: 'entity_properties',
            entity,
            predicate: locationPredicate,
        }
    }
    /**
     * 测试实体的记分板分数
     */
    public static entityScores(entity: string, scores: Record<string, RangeObject<int>>): IPredicateItem {
        return {
            condition: 'entity_scores',
            entity,
            scores,
        }
    }
    /**
     * 测试 killer_player实体是否可用
     */
    public static killedByPlayer(inverse = true): IPredicateItem {
        return {
            condition: 'killed_by_player',
            inverse,
        }
    }
    /**
     * 检查是否匹配当前位置 // TODO 位置通用标签
     */
    public static locationCheck(offsetX: int, offsetY: int, offsetZ: int, locationPredicate: any): IPredicateItem {
        return {
            condition: 'location_check',
            offsetX,
            offsetY,
            offsetZ,
            predicate: locationPredicate,
        }
    }
    /**
     * 检查工具 // TODO 物品共通标签
     */
    public static matchTool(itemPredicate: any): IPredicateItem {
        return {
            condition: 'match_tool',
            predicate: itemPredicate,
        }
    }
    /**
     * 测试一个0.0–1.0之间的随机数是不是小于给定值
     */
    public static randomChange(change: float): IPredicateItem {
        return {
            condition: 'random_change',
            change,
        }
    }
    /**
     * 测试一个0.0–1.0之间的随机数是不是小于给定值，受killer实体身上的抢夺等级影响
     */
    public static randomChangeWithLooting(change: float, lootingMultiplier: float): IPredicateItem {
        return {
            condition: 'random_change_with_looting',
            change,
            looting_multiplier:lootingMultiplier,
        }
    }
    /**
     * 测试另一个被引用的条件（谓词）是否通过
     */
    public static reference(name: string): IPredicateItem {
        return {
            condition: 'reference',
            name,
        }
    }
    /**
     * 1/爆炸半径的概率返回true
     */
    public static survivesExplosion(): IPredicateItem {
        return {
            condition: 'survives_explosion',
        }
    }
    /**
     * 以附魔等级为索引，从表中挑选概率通过
     */
    public static tableBonus(enchantment: EnchantmentId, chances: number[]): IPredicateItem {
        return {
            condition: 'table_bonus',
            enchantment,
            chances,
        }
    }
    /**
     * 检查当前时间
     */
    public static timeCheck(value: RangeObject<int>, period: int): IPredicateItem {
        return {
            condition: 'time_check',
            value,
            period,
        }
    }
    /**
     * 检查当前的天气状态
     */
    public static weatherCheck(raining: boolean, thundering: boolean): IPredicateItem {
        return {
            condition: 'weather_check',
            raining,
            thundering,
        }
    }
    /**
     * 检查当前的天气状态
     */
    public static valueCheck(value: RangeObject<int>, range: RangeObject<int>): IPredicateItem {
        return {
            condition: 'value_check',
            value,
            range,
        }
    }
}