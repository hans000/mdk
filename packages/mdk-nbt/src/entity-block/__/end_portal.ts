import { Facing6State } from "@shared/state/facing";
import { WaterloggedState } from "@shared/state/waterlogged";

export type EndPortalId = 'end_portal'

export interface EndPortalState extends Facing6State, WaterloggedState {}