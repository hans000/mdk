import { SlottedItem } from "./Item";

export interface Equipment {
    mainhandle: SlottedItem
    offhand: SlottedItem
    head: SlottedItem
    chest: SlottedItem
    legs: SlottedItem
    feet: SlottedItem
}