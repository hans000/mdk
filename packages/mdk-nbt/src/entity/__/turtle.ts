import { Breedable } from "./shared";
import { int } from "@shared/__/numberic";

export interface Turtle extends Omit<Breedable, 'id'> {
	id: TurtleId,
	HasEgg?: boolean,
	HomePosX?: int,
	HomePosY?: int,
	HomePosZ?: int,
	TravelPosX?: int,
	TravelPosY?: int,
	TravelPosZ?: int
}

export type TurtleId = 'turtle'