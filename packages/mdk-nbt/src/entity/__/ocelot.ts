import { Breedable } from "./shared";

export interface Ocelot extends Omit<Breedable, 'id'> {
	id: OcelotId
	Trusting?: boolean
}

export type OcelotId = 'ocelot'