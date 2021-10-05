import { Selector } from "@core/Selector";
import { Command } from "mdk-command";

export function useCommand(target = new Selector()) {
    return new Command(target)
}