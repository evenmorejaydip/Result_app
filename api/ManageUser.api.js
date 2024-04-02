import axiosInstance from "./AxiosInstance";

export const getUsersList = () => {
  return axiosInstance.get("/user");
};

export const CreateStudentData = (Data) => {
  return axiosInstance.post(`/user`, Data);
};
