import { Body, fetch } from "@tauri-apps/api/http";

import type { Customer } from "../../../shared/types/customer";
import { BACKEND_BASE_URL } from "../../../shared/environment-variables";
import type { BackendResponse } from "../../../shared/types/dto/backend-response";

const URL = `${BACKEND_BASE_URL}/customers`;

export async function createCustomer(
  createCustomerDto: CreateCustomerDto
): Promise<void> {
  const res = await fetch<BackendResponse<Customer>>(URL, {
    method: "POST",
    body: Body.json(createCustomerDto),
  });
  if (res.status !== 201) {
    throw new Error(res.data.message);
  }
}

export interface CreateCustomerDto extends Omit<Customer, "id"> {}
