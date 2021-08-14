import { formatMCParams, formatScoreRange, GsonStringify } from "@utils/index";
import { emit } from "@core/index";
import { Location } from "@lib/index";
import { ScoreRange, GameMode, EntityId, Entity } from 'mdk-nbt';
import { ContainerExpection } from '../expection';
import { SingleArrayResult } from "@typings/tool";
import { Objective } from "mdk-command/src";

export function selector(): Selector
export function selector(name: string): Selector
export function selector(selector: ISelector): Selector
export function selector(selector?: unknown) {
    return new Selector(selector)
}

/**
 * 选择器
 */
export class Selector {
    #exact = false;
    #objective: Objective;
    #literal = false;
    readonly #params: ISelector;

    constructor()
    constructor(name: string)
    constructor(selector: ISelector)
    constructor(selector?: ISelector | string) {
        if (selector) {
            if (typeof selector === 'string') {
                this.#literal = true
                this.#params = { name: selector }
            } else {
                this.#params = selector
            }
        }
        emit('init', this)
    }

    public get objective() { return this.#objective }

    public get props() { return this.#params }

    //#region 选择器格式化
    private arrayHandle<T>(select: SingleArrayResult<T>, key: string) {
        if (Array.isArray(select)) {
            // 过滤重复项并字符串拼接
            return Array.from(new Set(select)).reduce((s, v) => s += `${key}=${v},`, '').slice(0, -1)
        }
        return `${key}=${select}`
    }

    private rangeHandle(range: ScoreRange, key: string) { return `${key}=${formatScoreRange(range)}` }

    private mapRangeHandle(map: Record<string, ScoreRange>, key: string) {
        const result = Object.keys(map).reduce((s, k) => s += `${k}=${formatScoreRange(map[k])},`, '').slice(0, -1)
        return `${key}={${result}}`
    }

    private normalHandle<T>(normal: T, key: string) { return `${key}=${normal}` }

    private mapHandle = {
        location: (location: Location) => location.toNbtString(),
        range: formatMCParams,
        sort: this.arrayHandle,
        limit: this.normalHandle,
        distance: this.rangeHandle,
        level: this.rangeHandle,
        x_rotation: this.rangeHandle,
        y_rotation: this.rangeHandle,
        tag: this.arrayHandle,
        team: this.arrayHandle,
        gamemode: this.arrayHandle,
        name: this.arrayHandle,
        type: this.arrayHandle,
        nbt: (nbt: any) => `nbt=${GsonStringify(nbt)},`,
        advancements: this.normalHandle,
        predicate: this.normalHandle,
        scores: this.mapRangeHandle,
    }

    private handle(data: Partial<ISelector>) {
        return Object.keys(data).reduce((s, k) => {
            s += data[k] == null ? '' : k ? this.mapHandle[k](data[k], k) + ',' : ''
            return s
        }, '')
    }
    //#endregion

    /**
     * 选择一个objective
     */
    public select(objective: string) {
        if (! Objective.query(objective)) {
            throw ContainerExpection(`${objective} is not exist in objectives`)
        }

        this.#objective = Objective.query(objective)
        return this.objective
    }

    public exacted() { this.#exact = true }

    public unexacted() { this.#exact = false }

    public toString(objectived = false): string {
        if (objectived) {
            return this.objective.toString(this.#exact)
        }
        if (this.#exact) {
            this.exacted()
            return '@s'
        }
        if (this.#literal) {
            return this.#params.name as string
        }
        const { target, ...rest } = { target: '@s', ...this.#params }
        const params = this.handle(rest).slice(0, -1)
        const reuslt = params ? `${target}[${params}]` : `${target}`
        return reuslt
    }
}

//#region 选择器类型定义
export interface ISelector {
    /** 目标选择器 */
    target?: TargetSelector;
    /** 坐标 */
    location?: Location;
    /** 体积尺寸 */
    range?: Range;
    /** 顺序 */
    sort?: SingleArrayResult<SortType>;
    /** 数量 */
    limit?: number;
    /** 距离 */
    distance?: ScoreRange;
    /** 经验等级 */
    level?: ScoreRange;
    /** 垂直旋转角度 */
    x_rotation?: ScoreRange;
    /** 水平旋转角度 */
    y_rotation?: ScoreRange;
    /** 记分板标签 */
    tag?: SingleArrayResult<string>;
    /** 队伍名称 */
    team?: SingleArrayResult<string>;
    /** 游戏模式 */
    gamemode?: SingleArrayResult<GameMode>;
    /** 实体名称 */
    name?: SingleArrayResult<string>;
    /** 实体类型 */
    type?: SingleArrayResult<EntityId>;
    /** 谓词 */
    predicate?: string;
    /** nbt数据标签 */
    nbt?: Entity;
    /** 分数 */
    scores?: { [name: string]: ScoreRange };
    /** 进度 */
    advancements?: string;
}

interface Range {
    dx: number,
    dy: number,
    dz: number,
}

/**
 * @param random 随机排序
 * @param nearest 将目标由近到远排序
 * @param furthest 将目标由远到近排序
 * @param arbitrary 不进行排序
 *
 */
type SortType =
    | 'nearest'
    | 'furthest'
    | 'random'
    | 'arbitrary'
    | '!nearest'
    | '!furthest'
    | '!random'
    | '!arbitrary'

/**
 * 目标选择器
 * '@p' 最近的玩家，
 * '@r' 随机玩家，
 * '@a' 所有的玩家，
 * '@e' 所有实体，
 * '@s' 执行者自身，
 */
type TargetSelector =
    | '@p'
    | '@r'
    | '@a'
    | '@e'
    | '@s'
//#endregion