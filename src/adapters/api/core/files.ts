import { File } from "@/types/file";
import { apiInstance } from "./api";
import { getAuthHeaders } from "./utils";

const RESOURCE_PATH = '/files';

export async function getAllFiles(projectId: string) {
  return apiInstance.get(`${RESOURCE_PATH}/?projectId=${projectId}`, {
    headers: (await getAuthHeaders()),
  });
}

export async function createFile(file: Omit<File, '_id' | 'createdAt' | 'updatedAt'>) {
  return apiInstance.post(`${RESOURCE_PATH}/`, file, {
    headers: (await getAuthHeaders()),
  });
}

export async function deleteFile(fileId: string) {
  return apiInstance.delete(`${RESOURCE_PATH}/${fileId}`, {
    headers: (await getAuthHeaders()),
  });
} 