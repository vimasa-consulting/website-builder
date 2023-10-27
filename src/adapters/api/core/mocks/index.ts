import MockAdapter from 'axios-mock-adapter';

import usersMock from './users';
import organizationsMock from './organizations';

export default function registerMocks(mockInstance: MockAdapter) {
  [
    usersMock,
    organizationsMock
  ].forEach((registerMocks) => {
    registerMocks(mockInstance);
  });
}