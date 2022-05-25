import React from 'react';
import { IDonation } from '../utils/constants';
import { IBeneficiary } from './Beneficiary';

interface Props {
  models: (IDonation | IBeneficiary)[];
}

function Table({ models }: Props) {
  console.log(models[0]);
  // const columnHeads = Object.keys(models[0]);
  const columnHeads = ['Id', 'Amount', 'category', 'donorId', 'donorName'];
  return (
    <table className="mx-auto w-full table-fixed text-center  capitalize  dark:text-gray-400">
      <thead className=" bg-indigo-400  text-base  font-extrabold dark:bg-gray-700 dark:text-gray-400">
        {/* <tr className="border-double"> */}
        <th scope="col" className="border-2 border-black p-2" colSpan={1}>
          <div className="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 
                         focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700
                          dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">
              checkbox
            </label>
          </div>
        </th>

        {columnHeads.map((h) => (
          <th
            key={h}
            colSpan={h === 'Id' ? 1 : 6}
            scope="col"
            className="overflow-clip  border-2 border-black"
          >
            {h}
          </th>
        ))}
        {/* </tr> */}
      </thead>
      <tbody>
        {models.map((model) => (
          <tr
            key={model.id}
            className="bg-white text-fuchsia-900 hover:bg-gray-50 dark:border-gray-700
             dark:bg-gray-800 dark:hover:bg-gray-600"
          >
            <td className=" border-2 border-gray-500 p-2" colSpan={1}>
              <div className="flex items-center ">
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
            {Object.values(model).map((v, index) => (
              <td
                key={v}
                className="overflow-clip border-2  border-gray-500"
                colSpan={index === 0 ? 1 : 6}
              >
                {typeof v === 'object' ? v.name : v}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
