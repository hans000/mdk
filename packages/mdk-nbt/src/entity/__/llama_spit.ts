import { ProjectileBase } from "./shared";
import { long } from "@shared/__/numberic";

export interface LlamaSpit extends ProjectileBase {
	id: LlamaSpitId,
	Owner?: LlamaSpitOwner,
}

export interface LlamaSpitOwner {
	OwnerUUIDMost: long,
	OwnerUUIDLeast: long
}

export type LlamaSpitId = 'llama_spit'