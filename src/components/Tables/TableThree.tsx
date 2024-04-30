import { Package } from "@/types/package";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DeleteStudent } from "../../../api/ManageUser.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/components/common/Loader";
import DeleteIcon from "../../../utills/Icon/Delete";
import { EditIcon } from "../../../utills/Icon/Edit";
import ConfirmationModal from "../ConfirmationModal";

interface TableThreeProps {
  StudentData: Package[];
  getAllUsersList: () => Promise<void>;
  showActions?: boolean;
}

const TableThree: React.FC<TableThreeProps> = ({
  StudentData,
  getAllUsersList,
  showActions = true,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [studentIdToDelete, setStudentIdToDelete] = useState<string | null>(
    null,
  );

  const handleDelete = async (itemId: string, index: number) => {
    setIsDeleteModalOpen(true); // Open confirmation modal
    setStudentIdToDelete(itemId); // Store ID for deletion in modal
  };

  const handleDeleteConfirm = async () => {
    if (!studentIdToDelete) return;
    try {
      setLoading(true);
      const response = await DeleteStudent(studentIdToDelete);
      if (response.status == 200) {
        toast.success(response?.data?.message || "submitting student data");
        getAllUsersList();
        setIsDeleteModalOpen(false);
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

  const handlePrint = () => {
    window.print();
  };

  const renderTables = () => {
    return Object.entries(StudentData).map(([std, students], index) => (
      <div key={index} className="py-[30px]">
        <div className="flex justify-between align-center">
          <h2 className="my-3 text-[18px] font-bold text-primary">
            {std} Standard
          </h2>
          <button
            className="my-2 flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-black text-left text-white dark:bg-meta-4">
              <th className="min-w-[50px] px-4 py-4 font-medium text-white dark:text-white">
                No.
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-white dark:text-white xl:pl-11">
                Student Name
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-white dark:text-white">
                Std
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white dark:text-white">
                Marks
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white dark:text-white">
                Total marks
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-white dark:text-white">
                Percentage
              </th>
              {showActions && (
                <th className="px-4 py-4 font-medium text-white dark:text-white">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {students?.map((student: Package, index: number) => (
              <tr key={index}>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">{index + 1}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {student?.full_name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">{student?.std}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium`}
                  >
                    {student?.marks}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {student?.total_marks}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {student?.percentage.toFixed(2)}
                  </p>
                </td>
                {showActions && (
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <div className="flex items-center space-x-3.5">
                        <button
                          onClick={() =>
                            router.push(`/form-layout/${student._id}`)
                          }
                          className="hover:text-primary"
                          style={{ width: "25px" }}
                        >
                          <EditIcon />
                        </button>
                      </div>
                      <button
                        style={{ width: "25px" }}
                        className="hover:text-primary"
                        onClick={() => handleDelete(student._id, index)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ));
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-full overflow-x-auto">
          {StudentData ? renderTables() : null}
        </div>
      )}

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title="Confirm Student Deletion"
        message="Are you sure you want to delete this item?"
      />
    </div>
  );
};

export default TableThree;
