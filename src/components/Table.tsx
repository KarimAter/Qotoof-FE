/* eslint-disable no-nested-ternary */
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import API_ENDPOINT from '../utils/constants';
import fetchHelper from '../utils/fetchHelpers';
import { IBeneficiary, IDonation, IExpense } from '../utils/interfaces';
import Button from './Button';

interface Props {
  models: (IDonation | IBeneficiary | IExpense)[];
}

function Table({ models }: Props) {
  const columnHeads = Object.keys(models[0]);
  const router = useRouter();
  const { pathname } = router;
  let selectedRow: number;
  let checked: boolean = false;
  const handleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
  ) => {
    selectedRow = rowIndex;
    checked = !checked;
  };

  const editRow = () => {
    // console.log(selectedRow, checked);
    const targetPath =
      pathname === '/expenses'
        ? 'expenseForm'
        : pathname === '/donations'
          ? 'donationForm'
          : '';
    if (checked)
      router.push(
        {
          pathname: targetPath,
          query: { payload: JSON.stringify(models[selectedRow]) },
        },
        '/edit',
      );
  };
  const deleteRow = async () => {
    const targetPath =
      pathname === '/expenses'
        ? 'expense'
        : pathname === '/donations'
          ? 'donation'
          : '';
    await fetchHelper(`${API_ENDPOINT}/${targetPath}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: models[selectedRow].id }),
    });
  };
  return (
    <>
      <Button text="Edit" handleClick={editRow} />
      <Button text="Delete" type="submit" handleClick={deleteRow} />
      <table className="mx-auto w-full table-fixed text-center  capitalize  dark:text-gray-400">
        <thead className=" bg-indigo-400  text-base  font-extrabold dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="border-2 border-black " colSpan={1}>
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="h-2 w-2 min-w-fit  rounded border-gray-300
                     bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500
                      dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
            </th>
            {columnHeads.map((h) => (
              <th
                key={h}
                colSpan={h === 'id' ? 1 : 6}
                scope="col"
                className="overflow-clip  border-2 border-black"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {models.map((model, rowIndex) => (
            <tr
              key={model.id}
              className="bg-white text-fuchsia-900 hover:bg-gray-50 dark:border-gray-700
             dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <td className=" border-2 border-gray-500 " colSpan={1}>
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="h-2 w-2 min-w-fit rounded border-gray-300
                     bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500
                      dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  onChange={(e) => handleCheck(e, rowIndex)}
                />
              </td>
              {Object.values(model).map((v, index) => (
                <td
                  key={`${Math.random() * 100}`}
                  className="overflow-clip border-2  border-gray-500"
                  colSpan={index === 0 ? 1 : 6}
                >
                  {typeof v === 'object' ? v?.name : v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
