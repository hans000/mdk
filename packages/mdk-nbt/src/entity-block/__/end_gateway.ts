import { bit, long } from "@shared/__/numberic";
import { Position } from "@shared/__/position";

export type EndGatewayId = 'end_gateway'

export interface EndGateway {
    Age: long
    ExactTeleport: bit
    ExitPortal: Position
}