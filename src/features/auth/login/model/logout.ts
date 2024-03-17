export function logout(onSuccess?: () => void, onError?: (e: Error) => void) {
  if (onSuccess) return onSuccess();
}
