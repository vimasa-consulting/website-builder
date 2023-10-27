import { apiInstance } from "./api";
import { getAuthHeaders } from "./utils";

const RESOURCE_PATH = '/users';

export async function create() {
  return apiInstance.post(RESOURCE_PATH, {}, {
    headers: (await getAuthHeaders()),
  });
}

export async function getBySub(sub: string) {
  return apiInstance.get(`${RESOURCE_PATH}/${sub}`, {
    headers: (await getAuthHeaders()),
  });
}