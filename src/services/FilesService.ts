import { getAllFiles, createFile, deleteFile } from "@/adapters/api/core/files";
import { File } from "@/types/file";

export async function getAllFilesByProjectId(organizationId: string) {
  return getAllFiles(organizationId);
}

export async function createFileForProject(file: Omit<File, '_id' | 'createdAt' | 'updatedAt'>) {
  return createFile(file);
}

export async function deleteFileByFileId(fileId: string) {
  return deleteFile(fileId)
}