export function generateRandomCode(): string {
  const length = Math.floor(Math.random() * 10) + 5;
  const randomString = Math.random().toString(36).substr(2, length);
  return randomString;
}
