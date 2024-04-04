import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import Image from "next/image";

const SubHeader = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-end px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/logo-icon.svg"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
          </ul>

          <div className="relative">
            <Link className="flex items-center gap-4" href="#">
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-medium text-black dark:text-white">
                  Jaydip Mangukiya
                </span>
                <span className="block text-xs">Developed by</span>
              </span>

              <span className="h-12 w-12 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-01.png"}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  alt="User"
                />
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
