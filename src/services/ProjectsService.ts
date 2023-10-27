import { getAllProjects, createProject } from "@/adapters/api/core/projects";
import { Project } from "@/types/project";

export async function getAllProjectsByOrganizationId(organizationId: string) {
    return getAllProjects(organizationId);
}

export async function createProjectForOrganization(project: Omit<Project, "_id">) {
    return createProject(project);
}