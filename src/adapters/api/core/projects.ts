import { Project } from "@/types/project";
import { apiInstance } from "./api";

export function getAllProjects(organizationId: string) {
    return apiInstance.get(`/projects/?organizationId=${organizationId}`);
}

export function createProject(project: Omit<Project, "_id">) {
    return apiInstance.post('/project/', project);
}