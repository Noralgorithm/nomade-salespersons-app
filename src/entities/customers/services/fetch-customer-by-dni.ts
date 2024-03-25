import { fetch } from "@tauri-apps/api/http";
import { get } from "svelte/store";

import type { Customer } from "../../../shared/types/customer";
import { BACKEND_BASE_URL } from "../../../shared/environment-variables";
import type { BackendResponse } from "../../../shared/types/dto/backend-response";
import { auth } from "../../../features/auth/login/model/auth-store";

const URL = `${BACKEND_BASE_URL}/customers/dni`;

export async function fetchCustomerByDni(dni: string): Promise<Customer> {
  const res = await fetch<BackendResponse<Customer>>(`${URL}/${dni}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + get(auth)?.token,
    },
  });
  console.log(res)

  return res.data.data;
}
