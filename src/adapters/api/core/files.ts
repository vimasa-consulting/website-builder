import { File } from "@/types/file";
import { apiInstance } from "./api";

export function getAllFiles(projectId: string) {
    return apiInstance.get(`/files/?projectId=${projectId}`);
}

export function createFile(file: Omit<File, "_id">) {
    return apiInstance.post('/file/', file);
}

export function deleteFile(fileId: string) {
    return apiInstance.delete(`/file/${fileId}`);
} 