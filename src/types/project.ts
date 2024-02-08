export type Project = {
  _id: string,
  name: string,
  files: any[];
  imageURL?: string
  matomoProjectId?: string
  projectHostingAlias?: string,
  ownerUserId: string,
  collaborators: string[],
  organizationId: string
}
export interface ProjectTableData {
  _id: string;
  name: string;
  organizationId: string;
  files: any[];
  ownerUserId: string;
  projectHostingAlias: string;
  collaborators: string[];
  __v: number;
}