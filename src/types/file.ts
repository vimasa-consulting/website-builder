export type File = {
    _id?: string,
    name?: string,
    url?: string
}

export interface FileTableData {
    _id: string;
    name: string;
    url: string;
    builderData: string;
    projectId: string;
    __v: number;
}

