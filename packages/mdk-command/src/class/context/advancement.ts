import { File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { ContextAbstract } from "mdk-core";

export class Advancement extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public grant(selector: Selector) {
        return this.createAction(selector, 'grant')
    }

    public revoke(selector: Selector) {
        return this.createAction(selector, 'revoke')
    }

    private createAction(selector: Selector, type: 'grant' | 'revoke') {
        return {
            eveything: () => this.eveything(selector, type),
            only: (advancement: string, criterion?: string) => this.only(selector, type, advancement, criterion),
            from: (advancement: string) => this.from(selector, type, advancement),
            through: (advancement: string) => this.through(selector, type, advancement),
            until: (advancement: string) => this.until(selector, type, advancement),
        }
    }

    private eveything(selector: Selector, type: 'grant' | 'revoke') {
        this.context.add(`advancement ${type} ${selector.toString()} everything`)
    }

    private only(selector: Selector, type: 'grant' | 'revoke', advancement: string, criterion?: string) {
        this.context.add(`advancement ${type} ${selector.toString()} only ${advancement}${criterion ? ' ' + criterion : ''}`)
    }

    private from(selector: Selector, type: 'grant' | 'revoke', advancement: string) {
        this.context.add(`advancement ${type} ${selector.toString()} from ${advancement}`)
    }
    
    private through(selector: Selector, type: 'grant' | 'revoke', advancement: string) {
        this.context.add( `advancement ${type} ${selector.toString()} througth ${advancement}`)
    }
    
    private until(selector: Selector, type: 'grant' | 'revoke', advancement: string) {
        this.context.add( `advancement ${type} ${selector.toString()} until ${advancement}`)
    }
}