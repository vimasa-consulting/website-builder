import MockAdapter from "axios-mock-adapter";

export default function registerMocks(mockInstance: MockAdapter) {

  // GET USER
  const getUserPathRegex = new RegExp('\/users\/*');
  mockInstance.onGet(getUserPathRegex).reply(200, {
    "_id": "653912dd67d2f2556c977f64",
    "organizations": [],
    "authProviders": [{
      "provider": "cognito",
      "providerUserId": "21ddd013-c34f-4be4-8566-380aacb882db"
    }],
    "createdAt": "2023-10-25T13:06:37.898Z",
    "updatedAt": "2023-10-25T13:06:37.898Z",
    "__v": 0
  });

}