import { login as loginService, type LoginDto } from "../services/login";
import { auth as authStore } from "./auth-store";

export async function login(loginDto: LoginDto) {
  const authData = await loginService(loginDto);
  authStore.set(authData);
}

export async function logout() {
  authStore.clear();
}
