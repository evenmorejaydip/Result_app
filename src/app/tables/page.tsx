"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getUsersList } from "../../../api/ManageUser.api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Loader from "@/components/common/Loader";

const TablesPage = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllUsersList = async () => {
    try {
      setLoading(true);
      const response = await getUsersList();
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
    <DefaultLayout>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumb pageName="Tables" />
          <Link href="form-layout" className="flex w-fit">
            <button className="my-2 flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Add Result
            </button>
          </Link>

          <div className="flex flex-col gap-10">
            <TableThree
              StudentData={allData}
              getAllUsersList={getAllUsersList}
              showActions={true}
            />
          </div>
        </>
      )}
    </DefaultLayout>
  );
};

export default TablesPage;
