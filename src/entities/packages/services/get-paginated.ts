import { fetch } from "@tauri-apps/api/http";
import { get } from "svelte/store";

import { BACKEND_BASE_URL } from "../../../shared/environment-variables";
import type { BackendResponse } from "../../../shared/types/dto/backend-response";
import type { PaginatedItems } from "../../../shared/types/dto/paginated-data";
import type { Package } from "../../../shared/types/package";
import { auth } from "../../../features/auth/login/model/auth-store";

const URL = `${BACKEND_BASE_URL}/packages`;

export async function getPaginatedPackages(
  page: number,
  perPage: number
): Promise<PaginatedPackages> {
  const res = await fetch<BackendResponse<PaginatedPackages>>(
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

interface PaginatedPackages extends PaginatedItems<Package> {}
