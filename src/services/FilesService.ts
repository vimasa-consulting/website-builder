import { getAllFiles, createFile, deleteFile, get, getFileHeatmapData, update, publish, cloneFile } from "@/adapters/api/core/files";
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

export async function publishFile(file: FileUpdatePayload) {
  return publish(file);
}

export async function deleteFileByFileId(fileId: string) {
  return deleteFile(fileId)
}

export async function cloneFileByFileId(fileId: string) {
  return cloneFile(fileId)
}

export async function getFileWithHeatmapDataByFileId(siteId: string,hsr:string) {
  return getFileHeatmapData(siteId,hsr);
}
