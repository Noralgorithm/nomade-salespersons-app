import { fetch } from "@tauri-apps/api/http";
import { get } from "svelte/store";

import { BACKEND_BASE_URL } from "../../../shared/environment-variables";
import type { BackendResponse } from "../../../shared/types/dto/backend-response";
import type { PaginatedItems } from "../../../shared/types/dto/paginated-data";
import type { Service } from "../../../shared/types/service";
import { auth } from "../../../features/auth/login/model/auth-store";

const URL = `${BACKEND_BASE_URL}/services`;

export async function getPaginatedServices(
  page: number,
  perPage: number
): Promise<PaginatedServices> {
  const res = await fetch<BackendResponse<PaginatedServices>>(
    `${URL}?page=${page}&per-page=${perPage}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + get(auth)?.token,
      },
    }
  );

  if (res.status !== 200) {
    throw new Error(res.data.message);
  }

  return res.data.data;
}

interface PaginatedServices extends PaginatedItems<Service> {}
