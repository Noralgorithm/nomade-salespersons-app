import { Body, fetch } from "@tauri-apps/api/http";
import { get } from "svelte/store";

import { BACKEND_BASE_URL } from "../../../shared/environment-variables";
import type { BackendResponse } from "../../../shared/types/dto/backend-response";
import { auth } from "../../../features/auth/login/model/auth-store";
import type { Order } from "../../../shared/types/order";
import type { CreatePaymentDto } from "../../../shared/types/payment";

const URL = `${BACKEND_BASE_URL}/orders`;

export async function createPayment(
  orderId: string,
  createPaymentDto: CreatePaymentDto
): Promise<Order> {
  const res = await fetch<BackendResponse<Order>>(URL + '/' + orderId + '/payments', {
    method: "POST",
    body: Body.json(createPaymentDto),
    headers: {
      Authorization: "Bearer " + get(auth)?.token,
    },
  });
  
  console.log('Respuesta: ', res)
  
  if (res.status !== 201) {
    throw new Error(res.data.message);
  }
  

  return res.data.data;
}
