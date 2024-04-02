"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getUsersList } from "../../../api/ManageUser.api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const TablesPage = () => {
  const [allData, setAllData] = useState([]);

  const getAllUsersList = async () => {
    try {
      // setLoading(true);
      const response = await getUsersList();
      if (response.status == 200) {
        setAllData(response?.data?.allUser);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Error submitting student data",
      );
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsersList();
  }, []);

  return (
    <DefaultLayout>
      <ToastContainer />
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableThree StudentData={allData} />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
