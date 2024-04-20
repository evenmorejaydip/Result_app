import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import Image from "next/image";

const SubHeader = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between	 px-4 py-2 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4">
          <div>
            <Image
              width={100}
              height={32}
              src={"/images/logo/logo.png"}
              alt="Logo"
              priority
            />

            <h2 className="text-[18px] font-semibold text-black dark:text-white sm:text-title-md2">
              Gundaran Patel Parivar
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 2xsm:gap-7">
          <ul className="flex hidden items-center gap-2 2xsm:gap-4 lg:block">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
          </ul>

          <div className="relative">
            <Link className="flex items-center gap-4" href="#">
              <span className="text-right">
                <span className="block text-[20px] font-semibold text-black dark:text-white sm:text-title-md2">
                  Jaydip Mangukiya
                </span>
                <span className="block text-[16px] font-semibold text-black">
                  Developed by
                </span>
              </span>
            </Link>
          </div>
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
