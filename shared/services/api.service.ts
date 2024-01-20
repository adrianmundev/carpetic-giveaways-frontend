import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CARPETIC_BACKEND,
  withCredentials: true,
});

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) => {
      return axios.get<T>(url, config);
    },
    delete: <T>(url: string, config: AxiosRequestConfig = {}) => {
      return axios.delete<T>(url, config);
    },
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
      return axios.put<T>(url, body, config);
    },
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
      return axios.patch<T>(url, body, config);
    },
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
      return axios.post<T>(url, body, config);
    },
  };
};

export const apiClient = api(instance);
