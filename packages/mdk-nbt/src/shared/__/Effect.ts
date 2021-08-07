import { int } from "..";
import { EffectId } from "../constants/effect";
import { RangeObject } from "../tool";

export interface Effect {
    id: EffectId
    amplifier: RangeObject<int>
    duration: RangeObject<int>
}