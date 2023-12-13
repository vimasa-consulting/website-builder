import { File, FileStatus, FileUpdatePayload } from "@/types/file";
import { apiInstance } from "./api";
import { matomoInstance } from "./matomo";
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

export async function getFileHeatmapData(siteId: string, hsr:string) {
  const heatmapType=2;
  const deviceType=3;
  //&period=range&filter_limit=-1&segment=&method=HeatmapSessionRecording.getRecordedHeatmap&idSite=11
  return matomoInstance.get(`/index.php?module=API&format=json&date=2023-12-10,2023-12-12&idSiteHsr=${hsr}&heatmapType=${heatmapType}&deviceType=${deviceType}
  &period=range&filter_limit=-1&segment=&method=HeatmapSessionRecording.getRecordedHeatmap&idSite=${siteId}`, {
    headers: (await getAuthHeaders()),
  });  
}