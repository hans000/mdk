import { BlockEntityBase } from "@shared/__/BlockEntity";
import { WaterloggedState } from "@shared/state/waterlogged";
import { UUID } from "@shared/__/uuid";

export type ConcuitId = 'concuit'

export interface ConcuitState extends WaterloggedState {}

export interface Concuit extends BlockEntityBase {
    Target: UUID
}