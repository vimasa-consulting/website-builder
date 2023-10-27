import { CreateOrganizationPayload } from "@/types/organization";
import { apiInstance } from "./api";
import { getAuthHeaders } from "./utils";

const RESOURCE_PATH = '/organizations';

export async function create(payload: CreateOrganizationPayload) {
  return apiInstance.post(RESOURCE_PATH, payload, {
    headers: (await getAuthHeaders()),
  })
}