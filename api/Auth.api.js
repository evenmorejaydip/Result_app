import axiosInstance from "./AxiosInstance";

export const signInAPI = (type) => {
  return axiosInstance.get(`/higheruser/signIn?type=$type}`);
};
