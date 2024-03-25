import { fetch } from "@tauri-apps/api/http";
import { get } from "svelte/store";

import { BACKEND_BASE_URL } from "../../../shared/environment-variables";
import type { BackendResponse } from "../../../shared/types/dto/backend-response";
import type { PaginatedItems } from "../../../shared/types/dto/paginated-data";
import type { PaymentMethod } from "../../../shared/types/paymentMethod";
import { auth } from "../../../features/auth/login/model/auth-store";

const URL = `${BACKEND_BASE_URL}/payment-methods`;

export async function getAllPaymentMethods(): Promise<PaymentMethod[]> {
  const res = await fetch<BackendResponse<PaginatedPaymentMethods>>(
    `${URL}?page=1&per-page=10`,
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

  return res.data.data.items;
}

interface PaginatedPaymentMethods extends PaginatedItems<PaymentMethod> {}
