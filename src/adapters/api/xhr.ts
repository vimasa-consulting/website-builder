import axios, { CreateAxiosDefaults } from 'axios';

const defaultConfig: CreateAxiosDefaults = {
  timeout: 30000
}

export function getXHRClient(config: CreateAxiosDefaults) {
  return axios.create({
    ...defaultConfig,
    ...config
  });
}