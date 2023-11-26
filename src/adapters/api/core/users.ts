import { apiInstance } from "./api";
import { getAuthHeaders } from "./utils";

const RESOURCE_PATH = '/user';

export async function create() {
  return apiInstance.post(RESOURCE_PATH, {}, {
    headers: (await getAuthHeaders()),
  });
}

export async function getCurrent() {
  return apiInstance.get(`${RESOURCE_PATH}/`, {
    headers: (await getAuthHeaders()),
  });
}