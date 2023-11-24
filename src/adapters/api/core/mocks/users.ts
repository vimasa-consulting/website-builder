import MockAdapter from "axios-mock-adapter";

export default function registerMocks(mockInstance: MockAdapter) {

  // CREATE USER
  mockInstance.onPost('/user').reply(201, {
    "organizations": [],
    "authProviders": [
      {
        "provider": "cognito",
        "providerUserId": "21ddd013-c34f-4be4-8566-380aacb882db"
      }
    ],
    "_id": "653b852cba713718e2f9ec2b",
    "createdAt": "2023-10-27T09:38:52.520Z",
    "updatedAt": "2023-10-27T09:38:52.520Z",
    "__v": 0
  });

  // GET USER
  mockInstance.onGet('/user').reply(200, {
    "_id": "653bb1338e285cb5ea546390",
    "organizations": [
      "653bb2163aaab59822ea7ae3",
    ],
    "authProviders": [
      {
        "provider": "cognito",
        "providerUserId": "21ddd013-c34f-4be4-8566-380aacb882db"
      }
    ],
    "createdAt": "2023-10-27T12:46:43.594Z",
    "updatedAt": "2023-10-27T13:19:32.353Z",
    "__v": 0
  });

}