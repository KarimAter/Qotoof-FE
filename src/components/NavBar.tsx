import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/authSlice';
import { Role } from '../utils/constants';
import { sideBarData } from '../utils/data';
import { IUser } from '../utils/interfaces';

type Props = {};

function NavBar() {
  let authLevel = 0;
  const user = useSelector(authSelector) as IUser;
  if (user.role) {
    authLevel = Object.values(Role).indexOf(user.role.toString());
  }
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto rounded bg-gray-50 py-4 px-3 dark:bg-gray-800">
        <ul className="space-y-2">
          {sideBarData
            .filter((item) => item.role <= authLevel)
            .map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <div className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    <svg
                      className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                    <span className="ml-3">{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </aside>

  // <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  //   <div className="container flex flex-wrap justify-between items-center mx-auto">
  //     <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
  //       <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
  //         <li>
  //           <Link href="/">
  //             <a
  //               className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
  //               aria-current="page"
  //             >
  //               Home
  //             </a>
  //           </Link>
  //         </li>
  //         <li>
  //           <a
  //             href="#"
  //             className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0
  //          md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
  //          dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  //           >
  //             Beneficires
  //           </a>
  //         </li>
  //         <li>
  //           <Link href="/donors">
  //             <a
  //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0
  //         md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
  //          dark:border-gray-700"
  //             >
  //               Donors
  //             </a>
  //           </Link>
  //         </li>
  //         <li>
  //           <Link href="/stats">

  //             <a

  //               className="block py-2 pr-4 pl-3
  //          text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0
  //          md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
  //          dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  //             >
  //               Stats
  //             </a>
  //           </Link>
  //         </li>
  //         <li>
  //           <Link href="/contact">

  //             <a
  //               className="block py-2 pr-4 pl-3 text-gray-700
  //         hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
  //          dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  //             >
  //               Contact
  //             </a>
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  );
}

export default NavBar;
