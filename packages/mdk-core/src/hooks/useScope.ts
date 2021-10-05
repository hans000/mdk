import { wrapScope } from "@tools/wrapScope";
import { usePack } from ".";

export function useScope(name: string) {
    return wrapScope(name, usePack().scope)
}