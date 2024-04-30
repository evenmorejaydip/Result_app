"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="w-full overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src={"/images/cover/cover-01.png"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width={970}
            height={260}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-[0px] flex h-30 w-full max-w-30 items-center rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <Image
                src={"/images/logo/logo.png"}
                width={160}
                height={160}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                alt="profile"
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              ગુંદરણ પટેલ પરિવાર
            </h3>
            <div className="mx-auto mb-5.5 mt-4.5 grid max-w-xl grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  Data:
                </span>
                <span className="text-sm">26/05/2024</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  દિવસ:
                </span>
                <span className="text-sm">રવિવાર</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  સમય:
                </span>
                <span className="text-sm"> 04 : 00 PM</span>
              </div>
            </div>
            <Link href="/students" className="d-flex my-2">
              <button className="mx-auto my-2 flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                રિઝલ્ટ જોવા માટે અહીંયા ક્લિક કરો
              </button>
            </Link>
            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                સ્થળ:
              </h4>
              <p className="text-semibold mt-4.5 text-black">
                રાધે ફાર્મ સિંહ સર્કલ , શિવપ્લાઝા બિલ્ડીંગની પાછળ, સરથાણા
                જકાતનાકા.
              </p>
            </div>

            <div className="mt-6.5">
              <h4 className="mb-2 text-end font-medium text-black dark:text-white">
                Developed by :
              </h4>
              <div className="flex items-center justify-end gap-3.5">
                <h2 className="text-[18px] font-semibold text-black dark:text-white">
                  Jaydip Mangukiya
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECommerce;
