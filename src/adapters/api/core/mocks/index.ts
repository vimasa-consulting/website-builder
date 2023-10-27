import MockAdapter from 'axios-mock-adapter';

import usersMock from './users';
import projectsMock from './projects';
import filesMock from './files';

export default function registerMocks(mockInstance: MockAdapter) {
  [
    usersMock,
    projectsMock,
    filesMock
  ].forEach((registerMocks) => {
    registerMocks(mockInstance);
  });
}