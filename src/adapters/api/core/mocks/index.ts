import MockAdapter from 'axios-mock-adapter';

import usersMock from './users';
import projectsMock from './projects';
import filesMock from './files';
import organizationsMock from './organizations';

export default function registerMocks(mockInstance: MockAdapter) {
  [
    usersMock,
    projectsMock,
    filesMock,
    organizationsMock
  ].forEach((registerMocks) => {
    registerMocks(mockInstance);
  });
}