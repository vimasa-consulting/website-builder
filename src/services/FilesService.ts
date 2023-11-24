import { getAllFiles, createFile, deleteFile, get, update, publish } from "@/adapters/api/core/files";
import { File, FileUpdatePayload } from "@/types/file";

export async function getAllFilesByProjectId(organizationId: string) {
  return getAllFiles(organizationId);
}

export async function getFile(fileID: string) {
  return get(fileID);
}

export async function createFileForProject(file: Omit<File, '_id' | 'createdAt' | 'updatedAt'>) {
  return createFile(file);
}

export async function updateFile(file: FileUpdatePayload) {
  return update(file);
}

export async function publishFile(fileID: string) {
  return publish(fileID);
}

export async function deleteFileByFileId(fileId: string) {
  return deleteFile(fileId)
}