import { getAllProjects, createProject, deleteProject, update, getAllProjectShared } from "@/adapters/api/core/projects";
import { Project } from "@/types/project";

export async function getAllProjectsByOrganizationId(organizationId: string) {
    return getAllProjects(organizationId);
}

export async function createProjectForOrganization(project: Omit<Project, '_id' | 'imageURL' | 'ownerUserId'>) {
    return createProject(project);
}

export async function deleteProjectByProjectId(projectId: string) {
    return deleteProject(projectId)
}

export async function updateProject(project: Project) {
    return update(project);
}

export async function getAllProjectsSharedToMe(email: string) {
    return getAllProjectShared(email)
}
