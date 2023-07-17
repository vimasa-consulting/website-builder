import { BASE_API } from '../constants';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_API,
});

const navigate = useNavigate();
// Add interceptor for requests
axiosInstance.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, (error: Object) => {
  return Promise.reject(error)
});

axiosInstance.interceptors.response.use((response: any) => {
  return Promise.resolve(response)
}, (error: any) => {
  if(error.response.status === 401) {
    localStorage.clear();
    navigate('/login');
    return
  }
  return Promise.reject(error)
});

export default axiosInstance;