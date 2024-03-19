import { fetch } from "@tauri-apps/api/http";

import type { Customer } from "../../../shared/types/customer";
import { BACKEND_BASE_URL } from "../../../shared/environment-variables";
import type { BackendResponse } from "../../../shared/types/dto/backend-response";

const URL = `${BACKEND_BASE_URL}/customers`;

export async function fetchCustomerById(id: string): Promise<Customer> {
  const res = await fetch<BackendResponse<Customer>>(`${URL}/${id}`);
  return res.data.data;
}
