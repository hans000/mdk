import { File } from 'mdk-core'
import { Selector } from 'mdk-core'
import { int, byte, EffectId } from 'mdk-nbt';
import { effect } from "../../function";
import { ContextAbstract } from "mdk-core";

export class Effect extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }

    public clear(player: Selector): Effect
    public clear(player: Selector, effectId: EffectId): Effect
    public clear(player: Selector, effectId?: EffectId) {
        this.context.add(effect.clear(player, effectId))
        return this
    }

    public give(player: Selector, effectId: EffectId): Effect
    public give(player: Selector, effectId: EffectId, duration: int): Effect
    public give(player: Selector, effectId: EffectId, duration: int, amplifier: byte): Effect
    public give(player: Selector, effectId: EffectId, duration: int, amplifier: byte, hideParticles: boolean): Effect
    public give(player: Selector, effectId: EffectId, duration?: int, amplifier?: byte, hideParticles?: boolean) {
        this.context.add(effect.give(player, effectId, duration, amplifier, hideParticles))
        return this
    }
}