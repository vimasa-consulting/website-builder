import { File, FileStatus, FileUpdatePayload } from "@/types/file";
import { apiInstance } from "./api";
import { getAuthHeaders } from "./utils";

const RESOURCE_PATH = '/files';

export async function getAllFiles(projectId: string) {
  return apiInstance.get(`${RESOURCE_PATH}/?projectId=${projectId}`, {
    headers: (await getAuthHeaders()),
  });
}

export async function get(fileID: string) {
  return apiInstance.get(`${RESOURCE_PATH}/${fileID}`, {
    headers: (await getAuthHeaders()),
  });
}

export async function createFile(file: Omit<File, '_id' | 'createdAt' | 'updatedAt'>) {
  return apiInstance.post(`${RESOURCE_PATH}/`, file, {
    headers: (await getAuthHeaders()),
  });
}

export async function update(file: FileUpdatePayload) {
  const payload: any = {
    ...file
  };
  delete payload._id;
  return apiInstance.patch(`${RESOURCE_PATH}/${file._id}`, payload, {
    headers: (await getAuthHeaders()),
  });
}

export async function publish(file: FileUpdatePayload) {
  const payload: any = {
    ...file,
    status: FileStatus.PUBLISHED
  };
  delete payload._id;
  return apiInstance.post(`${RESOURCE_PATH}/publish/${file._id}`, payload, {
    headers: (await getAuthHeaders()),
  });
}

export async function deleteFile(fileId: string) {
  return apiInstance.delete(`${RESOURCE_PATH}/${fileId}`, {
    headers: (await getAuthHeaders()),
  });
} 

export async function cloneFile(fileId: string) {
  return apiInstance.get(`${RESOURCE_PATH}/clone?id=${fileId}`, {
    headers: (await getAuthHeaders()),
  });
}