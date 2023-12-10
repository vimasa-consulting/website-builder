import { Project } from "@/types/project";
import { apiInstance } from "./api";
import { getAuthHeaders } from "./utils";

const RESOURCE_PATH = '/project';

export async function getAllProjects(organizationId: string) {
  return apiInstance.get(`${RESOURCE_PATH}/?organizationId=${organizationId}`, {
    headers: (await getAuthHeaders()),
  });
}

export async function createProject(payload: Omit<Project, '_id' | 'imageURL' | 'ownerUserId'>) {
  return apiInstance.post(RESOURCE_PATH, payload, {
    headers: (await getAuthHeaders()),
  });
}

export async function deleteProject(projectId: string) {
  return apiInstance.delete(`${RESOURCE_PATH}/${projectId}`, {
    headers: (await getAuthHeaders()),
  });
}

export async function update(project: Project) {
  const payload: any = {
    ...project
  };
  delete payload._id;
  return apiInstance.patch(`${RESOURCE_PATH}/${project._id}`, payload, {
    headers: (await getAuthHeaders()),
  });
}

export async function getAllProjectShared(email: string) {
  return apiInstance.get(`${RESOURCE_PATH}/shared/?email=${email}`, {
    headers: (await getAuthHeaders()),
  });
}

export async function cloneProject(projectId: string) {
  return apiInstance.get(`${RESOURCE_PATH}/clone?id=${projectId}`, {
    headers: (await getAuthHeaders()),
  });
}