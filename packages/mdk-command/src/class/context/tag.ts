import { File, Selector, ContextAbstract, ContainerExpection, wrapScope, useScope } from 'mdk-core'
import { tag } from "../../function";

const registTags = new Set()

export class Tag extends ContextAbstract {
    readonly #scope: string | boolean
    readonly #target: Selector
    
    constructor(context: File, target: Selector) {
        super(context)
        this.#target = target
        this.#scope = context.context.scope
    }

    /**
     * 为该实体创建一个新的标签。
     * @param tagname 标签名
     */
    public add(tagname: string) {
        const scopeTagname = useScope(tagname)
        if (registTags.has(scopeTagname)) {
            throw ContainerExpection('this `', scopeTagname, '` tag has already existed')
        }
        registTags.add(scopeTagname)
        this.context.add(tag.add(this.#target, scopeTagname))
    }
    /**
     * 移除该实体所拥有的一个标签。
     * @param tagname 标签名
     */
    public remove(tagname: string) {
        const scopeTagname = useScope(tagname)
        this.context.add(tag.remove(this.#target, scopeTagname))
    }
    /**
     * 列出该实体拥有的全部标签。
     * @param tagName 标签名
     */
    public list(target: Selector) {
        this.context.add(tag.list(target))
    }
}

