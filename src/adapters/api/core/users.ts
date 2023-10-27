import { apiInstance } from "./api";
import { getAuthHeaders } from "./utils";

export async function getBySub(sub: string) {
  return apiInstance.get(`/users/${sub}`, {
    headers: (await getAuthHeaders()),
  });
}