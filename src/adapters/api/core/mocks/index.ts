import MockAdapter from 'axios-mock-adapter';

import usersMock from './users';
import projectsMock from './projects'

export default function registerMocks(mockInstance: MockAdapter) {
  [
    usersMock,
    projectsMock
  ].forEach((registerMocks) => {
    registerMocks(mockInstance);
  });
}