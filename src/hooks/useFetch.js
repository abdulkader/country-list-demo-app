import axios from 'axios';
import config from '@/config';

export const axiosClient = ({
  baseURL = config.api.baseURL,
  headers = {},
  timeout = 20000,
}) => axios.create({ baseURL, timeout, headers });

export const useFetch = (options = {}) => {
  const client = axiosClient(options);
  return client;
};
