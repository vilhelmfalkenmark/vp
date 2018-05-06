import axios from "axios";

const API_TIME_OUT = 30000;
export const API_BASE = "https://content.viaplay.se/pc-se/serier";

const asyncRequest = axios.create({
  baseURL: API_BASE,
  timeout: API_TIME_OUT
});

export const getRequest = path =>
  asyncRequest
    .get(path)
    .then(({ data }) => data)
    .catch(error => {
      console.error("Error in getRequest -->", error);
      return error;
    });
