import axios from 'axios';

// .ENV
import {API_BASE_URL} from '@env';

export const {CancelToken, isCancel} = axios;

export const api = axios.create({
  baseURL: API_BASE_URL,
});
