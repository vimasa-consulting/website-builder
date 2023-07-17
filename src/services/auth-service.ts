import axios from 'axios';
import { getAuthAPI } from '../constants';
import type { LoginPayload, ResetPasswordPayload } from '../types/auth.type';

async function login(payload: LoginPayload) {
  const api = getAuthAPI().login();
  const response = await axios.post(api, payload);
  return response.data;
}

async function forgotPassword(email: string) {
  const api = getAuthAPI().forgotPassword();
  const response = await axios.post(api, { email });
  return response.data;
}

async function resetPassword(payload: ResetPasswordPayload) {
  const api = getAuthAPI().resetPassword();
  const response = await axios.put(api, payload);
  return response.data;
}

export {
  login,
  forgotPassword,
  resetPassword
};