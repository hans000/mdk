import { float } from "..";
import { RangeObject } from "../tool";

export interface Distance {
    absolute: RangeObject<float>
    horizontal: RangeObject<float>
    x: RangeObject<float>
    y: RangeObject<float>
    z: RangeObject<float>
}