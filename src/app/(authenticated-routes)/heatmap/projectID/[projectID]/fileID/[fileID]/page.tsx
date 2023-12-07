'use client'

export interface NewProjectPayload {
  inputOneData: string;
  inputTwoData: string;
}

export type File = {
  Name: string
  Domain: string
  _id: string
}

export default function Page({ params }: { params: { fileID: string } }) {


  return (
    <>
      <iframe src={`/matamo/heatmap/${params.fileID}`} width="1280px" height="100%"></iframe>
    </>
  );
}