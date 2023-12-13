import { getXHRClient } from "../xhr";

const matomoInstance = getXHRClient({
  baseURL: process.env.NEXT_PUBLIC_MATOMO_API_BASE_URL
});

export {
    matomoInstance
};