import { Body, fetch } from "@tauri-apps/api/http";

import { BACKEND_BASE_URL } from "../../../../shared/environment-variables";
import type { BackendResponse } from "../../../../shared/types/dto/backend-response";
import type { Employee } from "../../../../shared/types/employee";

const URL = `${BACKEND_BASE_URL}/auth/login`;

export async function login(loginDto: LoginDto): Promise<LoginResponseDto> {
  const res = await fetch<BackendResponse<LoginResponseDto>>(URL, {
    method: "POST",
    body: Body.json(loginDto),
  });
  if (res.status !== 200) {
    throw new Error(res.data.message);
  }
  return res.data.data;
}

export type Token = string;

export interface LoginDto {
  employeeEmail: string;
  password: string;
}

export interface LoginResponseDto {
  token: Token;
  employee: Employee;
}
