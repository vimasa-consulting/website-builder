import MockAdapter from "axios-mock-adapter";

export default function registerMocks(mockInstance: MockAdapter) {

  // CREATE ORG
  mockInstance.onPost('/organization').reply(201, {
    "_id": "653bb2163aaab59822ea7ae3",
    "name": "Organization 1",
    "projects": [],
    "__v": 0
  });

};