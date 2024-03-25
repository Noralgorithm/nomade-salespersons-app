import { writable } from "svelte/store";
import type { Order } from "../../../shared/types/order";

export const currentOrder = writable<Order | null>(null);
