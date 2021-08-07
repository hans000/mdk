import { FileAbstract } from "./file"

type PluginFunc = (...args: any[]) => void
type PluginHandle = (activeFile: FileAbstract<any>) => void

const pluginHub = new Map<string, PluginFunc[]>()

export function use(pluginFunc: PluginFunc, ...args: any[]) {
    pluginFunc(...args)
}

type EventType = 'init'

export function emit(event: EventType, ctx: any) {
    const list = pluginHub.get(event)
    if (list?.length) {
        list.forEach(func => func.call(ctx, ctx))
    }
}

export function on(event: EventType, handle: PluginHandle) {
    pluginHub.get(event) ? pluginHub.get(event).push(handle) : (pluginHub.set(event, [handle]))
}