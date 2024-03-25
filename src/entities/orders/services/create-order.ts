import { Body, fetch } from "@tauri-apps/api/http";
import { get } from "svelte/store";

import { BACKEND_BASE_URL } from "../../../shared/environment-variables";
import type { BackendResponse } from "../../../shared/types/dto/backend-response";
import { auth } from "../../../features/auth/login/model/auth-store";
import type { CreateOrderDto, Order } from "../../../shared/types/order";

const URL = `${BACKEND_BASE_URL}/orders`;

export async function createOrder(
  createOrderDto: CreateOrderDto
): Promise<Order> {
  const res = await fetch<BackendResponse<Order>>(URL, {
    method: "POST",
    body: Body.json(createOrderDto),
    headers: {
      Authorization: "Bearer " + get(auth)?.token,
    },
  });

  return res.data.data;
  if (res.status !== 201) {
    throw new Error(res.data.message);
  }
}
