import MockAdapter from 'axios-mock-adapter';

import usersMock from './users';

export default function registerMocks(mockInstance: MockAdapter) {
  [
    usersMock
  ].forEach((registerMocks) => {
    registerMocks(mockInstance);
  });
}