import { getXHRClient } from "../xhr";
import MockAdapter from 'axios-mock-adapter';
import registerMocks from "./mocks";

const apiInstance = getXHRClient({
  baseURL: process.env.NEXT_PUBLIC_CORE_API_BASE_URL
});

if (process.env.NEXT_PUBLIC_MOCK_API_ENABLED === 'true') {
  const mockInstance = new MockAdapter(apiInstance);
  // register mocks
  registerMocks(mockInstance);
  // pass through rest
  mockInstance.onAny().passThrough();
}

export {
  apiInstance
};