import axiosInstance from "./AxiosInstance";

export const getUsersList = () => {
  return axiosInstance.get("/user");
};

export const CreateStudentData = (Data: any) => {
  return axiosInstance.post(`/user`, Data);
};

export const fetchDataSingle = (Id: any) => {
  return axiosInstance.get(`/user/${Id}`);
};

export const UpdateStudentData = (Id: any, adData: any) => {
  return axiosInstance.put(`/user/${Id}`, adData);
};

export const DeleteStudent = (Id: string) => {
  return axiosInstance.delete(`/user/${Id}`);
};
