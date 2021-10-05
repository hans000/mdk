import { ContextAbstract, File } from 'mdk-core';
import { BossbarStyle, BossbarType } from '../function/bossbar';
import { bossbar } from "../function";
import { BannerColorKind } from 'mdk-nbt';

export class Bossbar extends ContextAbstract {

    constructor(context: File) {
        super(context)
    }
    public add(id: string, name: string) {
        this.context.add(bossbar.add(id, name))
        return this
    }
    public list() {
        this.context.add(bossbar.list())
        return this
    }
    public get(id: string, type: BossbarType) {
        this.context.add(bossbar.get(id, type))
        return this
    }
    public remove(id: string) {
        this.context.add(bossbar.remove(id))
        return this
    }
    public setStyle(id: string, style: BossbarStyle) {
        this.context.add(bossbar.setStyle(id, style))
        return this
    }
    public setValue(id: string, value: number) {
        this.context.add(bossbar.setValue(id, value))
        return this
    }
    public setMax(id: string, max: number) {
        this.context.add(bossbar.setMax(id, max))
        return this
    }
    public setVisible(id: string, visible: boolean) {
        this.context.add(bossbar.setVisible(id, visible))
        return this
    }
    public setPlayers(id: string) {
        this.context.add(bossbar.setPlayers(id))
        return this
    }
    public setColor(id: string, color: BannerColorKind) {
        this.context.add(bossbar.setColor(id, color))
        return this
    }
}