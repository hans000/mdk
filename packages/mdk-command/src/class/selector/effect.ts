import { File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { effect } from "../../function";
import { int, byte, EffectId } from 'mdk-nbt';
import { ContextAbstract } from "mdk-core";

export class Effect extends ContextAbstract {
    readonly #target: Selector

    constructor(context: File, target: Selector) {
        super(context)
        this.#target = target
        target.unexacted()
    }

    public clear(): void
    public clear(effectId: EffectId): void
    public clear(effectId?: EffectId) {
        this.context.add(effect.clear(this.#target, effectId))
    }

    public give(effectId: EffectId): void
    public give(effectId: EffectId, duration: int): void
    public give(effectId: EffectId, duration: int, amplifier: byte): void
    public give(effectId: EffectId, duration: int, amplifier: byte, hideParticles: boolean): void
    public give(effectId: EffectId, duration?: int, amplifier?: byte, hideParticles?: boolean) {
        this.context.add(effect.give(this.#target, effectId, duration, amplifier, hideParticles))
    }
}