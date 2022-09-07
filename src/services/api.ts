import axios from "axios";

// .ENV
import { API_BASE_URL } from "@env";

export const { CancelToken, isCancel } = axios;

export const api = axios.create({
  baseURL: "http://192.168.15.3:3001/",
});
