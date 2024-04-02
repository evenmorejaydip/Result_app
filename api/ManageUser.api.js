import axiosInstance from "./AxiosInstance";

export const getUsersList = (queryParams) => {
  return axiosInstance.get(`/higheruser/usersList?${queryParams}`);
};
