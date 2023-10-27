import { apiInstance } from "./api";

export function getAllProjects(organizationId: string) {
    return apiInstance.get(`/projects/?organizationId=${organizationId}`);
}