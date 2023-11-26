import MockAdapter from "axios-mock-adapter";

export default function registerMocks(mockInstance: MockAdapter) {

  // GET ALL FILES
  const getAllFilesPathRegex = new RegExp('\/files\/\\?projectId=*');
  mockInstance.onGet(getAllFilesPathRegex).reply(200, [
    {
      "_id": "653bb74d9759245f93ca2b92044",
      "name": "File 1",
      "slug": "/",
      "builderData": "htmlData",
      "projectId": "653bb3a6187018ad655dc924",
      "__v": 0
    },
    {
      "_id": "653bb7519759435f93ca2b92047",
      "name": "File 2",
      "slug": "/home",
      "builderData": "htmlData",
      "projectId": "653bb3a6187018ad655dc924",
      "__v": 0
    },
    {
      "_id": "653bb74d9744459f93ca2b92044",
      "name": "File 3",
      "slug": "/about",
      "builderData": "htmlData",
      "projectId": "653bb3a6187018ad655dc924",
      "__v": 0
    },
    {
      "_id": "653bb7522219759f93ca2b92047",
      "name": "File 4",
      "slug": "/company/mission",
      "builderData": "htmlData",
      "projectId": "653bb3a6187018ad655dc924",
      "__v": 0
    },
    {
      "_id": "653bb7566619759f93ca2b92047",
      "name": "File 5",
      "slug": "/testimony",
      "builderData": "htmlData",
      "projectId": "653bb3a6187018ad655dc924",
      "__v": 0
    },
  ]);

  const createFileRegex = new RegExp('\/files\/');
  mockInstance.onPost(createFileRegex).reply(config => {
    const requestData = JSON.parse(config.data);

    const sampleResponse = {
      "name": requestData.name,
      "slug": requestData.slug,
      "builderData": "htmlData",
      "projectId": "653bb3a6187018ad655dc924",
      "_id": "653bb7519759f93ca2b92047",
      "__v": 0
    }

    return [200, sampleResponse];
  });

  const deleteFileRegex = new RegExp('\/files\/.*');
  mockInstance.onDelete(deleteFileRegex).reply(200, {
    "_id": "653a238e5d63a9f6d5965d36",
    "name": "File 1",
    "slug": "/",
    "builderData": "htmlDataUpdated",
    "__v": 0
  }
  );

}