import { File, Selector, ContextAbstract } from 'mdk-core'

type ActionLogicFn = (context: ActionLogic) => Advancement

class ActionLogic {
    readonly #context: Advancement
    readonly #type: 'grant' | 'revoke'

    constructor(context: Advancement, type: 'grant' | 'revoke') {
        this.#context = context
        this.#type = type
    }
    public eveything(selector: Selector) {
        this.#context.context.add(`advancement ${this.#type} ${selector.toString()} everything`)
        return this.#context
    }

    public only(selector: Selector, advancement: string, criterion?: string) {
        this.#context.context.add(`advancement ${this.#type} ${selector.toString()} only ${advancement}${criterion ? ' ' + criterion : ''}`)
        return this.#context
    }

    public from(selector: Selector, advancement: string) {
        this.#context.context.add(`advancement ${this.#type} ${selector.toString()} from ${advancement}`)
        return this.#context
    }
    
    public through(selector: Selector, advancement: string) {
        this.#context.context.add( `advancement ${this.#type} ${selector.toString()} througth ${advancement}`)
        return this.#context
    }
    
    public until(selector: Selector, advancement: string) {
        this.#context.context.add( `advancement ${this.#type} ${selector.toString()} until ${advancement}`)
        return this.#context
    }
}

export class Advancement extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public grant(fn: ActionLogicFn) {
        return fn(new ActionLogic(this, 'grant'))
    }

    public revoke(fn: ActionLogicFn) {
        return fn(new ActionLogic(this, 'revoke'))
    }
}