"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import {
  CreateStudentData,
  UpdateStudentData,
  fetchDataSingle,
} from "../../../api/ManageUser.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import stdData from "../../../utills/data.json";
import LoaderIcon from "../../../utills/Icon/LoaderIcon";

const initialFormData = {
  firstName: "",
  middleName: "",
  lastName: "",
  std: "",
  totalMarks: 0,
  marks: 0,
};

const FormLayout = ({ params }: any) => {
  const id = params?.id;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialFormData);

  const fetchDataSingleData = async () => {
    try {
      if (id) {
        const response = await fetchDataSingle(id);
        const userData = response?.data?.employee;
        if (userData) {
          setFormData({
            firstName: userData.first_name || "",
            middleName: userData.middle_name || "",
            lastName: userData.last_name || "",
            std: userData.std || "",
            marks: userData.marks || "",
            totalMarks: userData.total_marks || "",
          });
        }
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    fetchDataSingleData();
  }, [id]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleStdChange = (e: any) => {
    setFormData({ ...formData, std: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newErrors = { ...initialFormData };
    let hasError = false;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      hasError = true;
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      hasError = true;
    }

    if (!formData.std) {
      newErrors.std = "Std is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    let adData = {
      first_name: formData?.firstName,
      middle_name: formData?.middleName,
      last_name: formData?.lastName,
      marks: formData?.marks,
      total_marks: formData?.totalMarks,
      std: formData?.std,
    };
    try {
      setLoading(true);
      let response;
      if (id) {
        response = await UpdateStudentData(id, adData);
      } else {
        response = await CreateStudentData(adData);
      }
      if (response.status == 201 || response.status == 200) {
        setFormData(initialFormData);
        setErrors(initialFormData);
        toast.success(response?.data?.message || "submitting student data");
        // setTimeout(() => {
        //   router.push("/tables");
        // }, 2000);
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Error submitting student data",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <ToastContainer />
      <Breadcrumb pageName="Student Result Add" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Fill Data
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Student name
                    </label>
                    <input
                      value={formData.firstName}
                      onChange={handleChange}
                      name="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.firstName && (
                      <div className="error text-red">{errors.firstName}</div>
                    )}
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Father name
                    </label>
                    <input
                      value={formData.middleName}
                      onChange={handleChange}
                      name="middleName"
                      type="text"
                      placeholder="Enter your Father name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Surname
                    </label>
                    <input
                      value={formData.lastName}
                      onChange={handleChange}
                      name="lastName"
                      type="text"
                      placeholder="Enter your surname"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.lastName && (
                      <div className="error text-red">{errors.lastName}</div>
                    )}
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Marks
                    </label>
                    <input
                      value={formData?.marks}
                      onChange={handleChange}
                      name="marks"
                      type="number"
                      placeholder="Enter your marks"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Total marks
                    </label>
                    <input
                      value={formData?.totalMarks}
                      onChange={handleChange}
                      type="number"
                      name="totalMarks"
                      placeholder="Enter your total marks"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Std
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                      className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input
                      dark:focus:border-primary`}
                      onChange={handleStdChange}
                      value={formData.std}
                    >
                      <option
                        value=""
                        disabled
                        className="text-body dark:text-bodydark"
                      >
                        Select Your Std
                      </option>
                      {stdData?.stdData.map((std) => (
                        <option
                          key={std.value}
                          value={std.value}
                          className="text-body dark:text-bodydark"
                        >
                          {std.label}
                        </option>
                      ))}
                    </select>
                    {errors.std && (
                      <div className="error text-red">{errors.std}</div>
                    )}

                    <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  {loading ? <LoaderIcon /> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
