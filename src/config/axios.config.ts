import axios from "axios";
import { getSession } from "@/lib/session";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getSession();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete config.headers["Authorization"];
  }
  return config;
});

export const axiosFormData = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "/",
    "Content-Type": "multipart/form-data",
  },
});

axiosFormData.interceptors.request.use((config) => {
  const token = getSession();
  if (token) {
    config.headers["Authorization"] = ` Bearer${token}`;
  } else {
    delete config.headers["Authorization"];
  }
  return config;
});