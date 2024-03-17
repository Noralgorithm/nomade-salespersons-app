import { writable } from "svelte/store";

import { INITIAL_ROUTE } from "./config";

export const currentRoute = writable(INITIAL_ROUTE);

export function navigateTo(path: string) {
  currentRoute.set(path);
}
