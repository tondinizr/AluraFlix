import axios from "axios";
import config from "../config";

const baseURL = `${config.URL_BACKEND_TOP}`;

const api = axios.create({
  baseURL,
});

export default api;
