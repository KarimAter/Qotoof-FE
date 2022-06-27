/* eslint-disable react/jsx-curly-brace-presence */
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/authSlice';
import { themeSelector } from '../redux/themeSlice';
import { Role } from '../utils/constants';
import { sideBarData } from '../utils/data';

type Props = {};

function SideBar() {
  let authLevel = 0;
  const { user } = useSelector(authSelector);
  const { theme } = useSelector(themeSelector);
  if (user.role) {
    authLevel = Object.values(Role).indexOf(user?.role.toString());
  }

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div
        className={`overflow-y-auto rounded  py-4 px-3 dark:bg-gray-800 ${
          theme === 'light' ? `bg-gray-100` : `bg-slate-700`
        }`}
      >
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
  );
}
export default SideBar;
