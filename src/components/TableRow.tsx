/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import { IDonation, IDonor } from '../utils/constants';

interface Props {
  fields: (string | number)[];
}

const TableRow = ({ fields }: Props) => {
  return (
    <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
      <td className=" p-4" colSpan={1}>
        <div className="flex items-center">
          <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300
                         bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500
                          dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>

      {fields.map((field) => (
        <td key={field} className="px-6 py-4 border-2" colSpan={3}>
          {field}
        </td>
      ))}
      {/* <td className="px-6 py-4 text-right" colSpan={3}>
          <a
            href="#"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Edit
          </a>
        </td> */}
    </tr>
  );
};

export default TableRow;
