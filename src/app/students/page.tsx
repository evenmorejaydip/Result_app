"use client";
import { useState, useEffect } from "react";
import TableThree from "@/components/Tables/TableThree";
import { getUsersList } from "../../../api/ManageUser.api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Loader from "@/components/common/Loader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const TablesPage = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllUsersList = async () => {
    try {
      setLoading(true);
      const response = await getUsersList();
      console.log(response?.data?.userData);

      if (response.status == 200) {
        setAllData(response?.data?.userData);
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

  useEffect(() => {
    getAllUsersList();
  }, []);

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col gap-10">
            <TableThree
              StudentData={allData}
              getAllUsersList={getAllUsersList}
              showActions={false}
            />
          </div>
        </>
      )}
    </>
  );
};

export default TablesPage;
