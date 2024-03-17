import { writable } from "svelte/store";

import type { Customer } from "../../../shared/types/customer";

export const currentCustomer = writable<Customer | null>(null);

export function setCurrentCustomer(customer: Customer | null) {
  currentCustomer.set(customer);
}
