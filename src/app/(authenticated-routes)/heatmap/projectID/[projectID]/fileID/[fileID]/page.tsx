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
      <iframe 
        src={`/matomo/?module=HeatmapSessionRecording&action=embedPage&idSite=11&idSiteHsr=23`} 
        width="1280px" height="100%">          
        </iframe>
    </>
  );
}


