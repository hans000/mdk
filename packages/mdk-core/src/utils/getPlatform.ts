export function getPlatform() {
    if (globalThis.constructor.name === 'Window') return 'web';
    if (globalThis.constructor.name === 'DedicatedWorkerGlobalScope') return 'worker';
    if (globalThis.constructor.name === 'Object') return 'node';
    return globalThis.process ? 'node' : (globalThis.window ? 'web' : (globalThis.FileReaderSync ? 'worker' : 'unknown'));
}