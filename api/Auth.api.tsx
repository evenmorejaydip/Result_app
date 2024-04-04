import axiosInstance from "./AxiosInstance";

export const signInData = (Data: any) => {
  return axiosInstance.post(`/login`, Data);
};
