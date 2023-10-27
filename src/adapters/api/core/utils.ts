import { Auth } from "aws-amplify";

export async function getAuthHeaders(useAccessToken = false) {
  const currentSession = await Auth.currentSession();
  return {
    'Authorization': `Bearer ${useAccessToken ? currentSession.getAccessToken().getJwtToken() : currentSession.getIdToken().getJwtToken()}`
  };
}