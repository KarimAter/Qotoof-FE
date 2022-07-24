/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { KeyedMutator } from 'swr';
import { authSelector } from '../redux/authSlice';
import API_ENDPOINT from '../utils/constants';
import { fetchHelper } from '../utils/fetchHelpers';
import { IBeneficiary, IDonation, IExpense } from '../utils/interfaces';
import Button from './Button';

interface Props {
  models: (IDonation | IBeneficiary | IExpense)[];
  mut: KeyedMutator<IDonation[] | IExpense[]>;
}

function Table({ models, mut }: Props) {
  const { token } = useSelector(authSelector);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const columnHeads = Object.keys(models[0]);
  const router = useRouter();
  const { pathname } = router;
  const handleCheck = (rowIndex: number) => {
    selectedRows.includes(rowIndex)
      ? setSelectedRows(selectedRows.filter((v) => v !== rowIndex))
      : setSelectedRows(selectedRows.concat(rowIndex));
  };

  const editRow = () => {
    const targetPath =
      pathname === '/expenses'
        ? 'expenseForm'
        : pathname === '/donations'
          ? 'donationForm'
          : '';

    router.push(
      {
        pathname: targetPath,
        query: { payload: JSON.stringify(models[selectedRows[0]]) },
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
      token,
      body: JSON.stringify({ ids: selectedRows.map((row) => models[row].id) }),
    });
    mut();
  };
  // const x = () => rowCount !== 1;
  // const y = () => rowCount === 0;
  return (
    <>
      <Button handleClick={editRow} disabled={selectedRows.length !== 1}>
        Edit
      </Button>
      <Button
        type="submit"
        handleClick={deleteRow}
        disabled={selectedRows.length === 0}
      >
        Delete
      </Button>
      <table className="mx-auto w-full table-fixed text-center  capitalize  dark:text-gray-400">
        <thead className=" bg-indigo-400  text-base  font-extrabold dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="border-2 border-black " colSpan={1}>
              <input
                id="checkbox-all-search"
                type="checkbox"
                onChange={() =>
                  selectedRows.length === 0
                    ? setSelectedRows(Array.from(Array(models.length).keys()))
                    : setSelectedRows([])
                }
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
                  onChange={() => handleCheck(rowIndex)}
                  checked={selectedRows.includes(rowIndex)}
                  className="h-2 w-2 min-w-fit rounded border-gray-300
                     bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500
                      dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
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
