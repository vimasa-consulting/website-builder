import { apiInstance } from "./api";

export function getBySub(sub: string) {
  return apiInstance.get(`/users/${sub}`);
}