import { getAllProjects, createProject, deleteProject, update } from "@/adapters/api/core/projects";
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