import React from 'react';

interface Props {
  columnHeads: string[];
}

function TableHead({ columnHeads }: Props) {
  return (
    <thead className="bg-gray-50 text-xs  text-gray-700 dark:bg-gray-700 dark:text-gray-400 border-4">
      <tr>
        <th scope="col" className="p-4" colSpan={1}>
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
          <th key={h} colSpan={3} scope="col" className="px-6 py-3 border-2">
            {h}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;