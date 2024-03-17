export async function login(
  onSuccess?: () => void,
  onError?: (e: Error) => void
) {
  if (onSuccess) return onSuccess();
}
