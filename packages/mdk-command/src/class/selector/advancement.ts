import { File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { ContextAbstract } from "mdk-core";

export class Advancement extends ContextAbstract {
    readonly #target: Selector;

    constructor(context: File, target: Selector) {
        super(context)
        this.#target = target
        target.unexacted()
    }

    public grant() {
        return this.createAction('grant')
    }

    public revoke() {
        return this.createAction('revoke')
    }

    private createAction(type: 'grant' | 'revoke') {
        return {
            eveything: () => this.eveything(type),
            only: (advancement: string, criterion?: string) => this.only(type, advancement, criterion),
            from: (advancement: string) => this.from(type, advancement),
            through: (advancement: string) => this.through(type, advancement),
            until: (advancement: string) => this.until(type, advancement),
        }
    }

    private eveything(type: 'grant' | 'revoke') {
        this.context.add(`advancement ${type} ${this.#target.toString()} everything`)
    }

    private only(type: 'grant' | 'revoke', advancement: string, criterion?: string) {
        this.context.add(`advancement ${type} ${this.#target.toString()} only ${advancement}${criterion ? ' ' + criterion : ''}`)
    }

    private from(type: 'grant' | 'revoke', advancement: string) {
        this.context.add(`advancement ${type} ${this.#target.toString()} from ${advancement}`)
    }
    
    private through(type: 'grant' | 'revoke', advancement: string) {
        this.context.add( `advancement ${type} ${this.#target.toString()} througth ${advancement}`)
    }
    
    private until(type: 'grant' | 'revoke', advancement: string) {
        this.context.add( `advancement ${type} ${this.#target.toString()} until ${advancement}`)
    }
}