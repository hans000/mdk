import { File, Selector, ContextAbstract, ContainerExpection } from 'mdk-core'
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

    private getTagname(tagName: string) {
        return (
            tagName.startsWith('_')
                ? tagName
                : this.#scope
                    ? `${this.#scope}_${tagName}`
                    : tagName
            
        )
    }
    /**
     * 为该实体创建一个新的标签。
     * @param tagName 标签名
     */
    public add(tagName: string) {
        const newTagName = this.getTagname(tagName)
        if (registTags.has(newTagName)) {
            throw ContainerExpection('this `', newTagName, '` tag has already existed')
        }
        registTags.add(newTagName)
        this.context.add(tag.add(this.#target, newTagName))
    }
    /**
     * 移除该实体所拥有的一个标签。
     * @param tagName 标签名
     */
    public remove(tagName: string) {
        this.context.add(tag.remove(this.#target, tagName))
    }
    /**
     * 列出该实体拥有的全部标签。
     * @param tagName 标签名
     */
    public list(target: Selector) {
        this.context.add(tag.list(target))
    }
}

