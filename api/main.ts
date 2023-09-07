import { BASE_URL } from '../const';
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  withCredentials: false,
  headers: { 'X-Custom-Header': 'foobar' },
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export function postAPI(url, data) {
  return instance.post(url, data);
}
export function getAPI(url, params) {
  return instance.get(url, params);
}
