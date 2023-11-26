import { Organization } from "@/types/organization";
import { apiInstance } from "./api";
import { getAuthHeaders } from "./utils";

const RESOURCE_PATH = '/organization';

export async function create(payload: Omit<Organization, '_id'>) {
  return apiInstance.post(RESOURCE_PATH, payload, {
    headers: (await getAuthHeaders()),
  });
}