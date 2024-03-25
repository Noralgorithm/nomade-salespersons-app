import { Body, fetch } from "@tauri-apps/api/http";
import { get } from "svelte/store";

import type { Customer } from "../../../shared/types/customer";
import { BACKEND_BASE_URL } from "../../../shared/environment-variables";
import type { BackendResponse } from "../../../shared/types/dto/backend-response";
import { auth } from "../../../features/auth/login/model/auth-store";

const URL = `${BACKEND_BASE_URL}/customers`;

export async function createCustomer(
  createCustomerDto: CreateCustomerDto
): Promise<void> {
  const res = await fetch<BackendResponse<Customer>>(URL, {
    method: "POST",
    body: Body.json(createCustomerDto),
    headers: {
      Authorization: "Bearer " + get(auth)?.token,
    },
  });
  if (res.status !== 201) {
    throw new Error(res.data.message);
  }
}

export interface CreateCustomerDto extends Omit<Customer, "id"> {}
