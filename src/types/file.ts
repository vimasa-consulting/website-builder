export enum FileStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published'
}

export type File = {
  _id: string,
  name: string,
  slug: string,
  htmlHeadContent: string,
  htmlBodyContent: string,
  status: FileStatus,
  builderData: string,
  projectId: string,
  createdAt: string,
  updatedAt: string,
  imageURL?: string
}

export type FileUpdatePayload = {
  _id: string,
  name?: string,
  slug?: string,
  htmlHeadContent?: string,
  htmlBodyContent?: string,
  htmlString?: string,
  builderData?: string,
}

export interface FileTableData {
  _id: string;
  name: string;
  slug: string,
  builderData: string;
  projectId: string;
  __v: number;
}

