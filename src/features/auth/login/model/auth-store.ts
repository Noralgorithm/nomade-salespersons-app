import { writable } from "svelte/store";

import type { Token } from "../services/login";
import type { Employee } from "../../../../shared/types/employee";

function createAuthStore() {
  const auth = writable<AuthStore | null>(null);

  return {
    subscribe: auth.subscribe,
    set: (state: AuthStore) => {
      auth.set(state);
    },
    clear: () => {
      auth.set(null);
    },
  };
}

export const auth = createAuthStore();

export interface AuthStore {
  token: Token;
  employee: Employee;
}
