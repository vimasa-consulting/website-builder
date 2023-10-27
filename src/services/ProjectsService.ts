import { getAllProjects } from "@/adapters/api/core/projects";

export async function getAllProjectsByOrganizationId(organizationId: string) {
    return getAllProjects(organizationId);
}