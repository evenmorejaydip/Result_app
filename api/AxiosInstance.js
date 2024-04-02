import axios from "axios";
import { getToken, logoutUser } from "../utills/utills";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${getToken()}`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGJkMzlmYWRhNjY1MTcyODk5Zjc2NCIsImVtYWlsIjoic3VwZXJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiU1VQRVJfQURNSU4iLCJpYXQiOjE3MTIwNTQwMzIsImV4cCI6MTcxMjE0MDQzMn0.uLKuJNF2QTfjGDODwtO5CfEe5L_dCNghNS1ROQTDgWM`,
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGJkMzlmYWRhNjY1MTcyODk5Zjc2NCIsImVtYWlsIjoic3VwZXJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiU1VQRVJfQURNSU4iLCJpYXQiOjE3MTIwNTQwMzIsImV4cCI6MTcxMjE0MDQzMn0.uLKuJNF2QTfjGDODwtO5CfEe5L_dCNghNS1ROQTDgWM`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // logoutUser()
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
