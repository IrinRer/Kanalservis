import axios, { AxiosInstance } from "axios";
import { getBackendURL } from "../helpers/common";

export const api = (): AxiosInstance => {
  return axios.create({
    baseURL: getBackendURL(),
  });
};
