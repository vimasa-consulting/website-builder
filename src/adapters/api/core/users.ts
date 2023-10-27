import { apiInstance } from "./api";

export function get(id: string) {
  return apiInstance.get(`/users/${id}`);
}