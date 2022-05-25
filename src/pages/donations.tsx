/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import Beneficiary, { IBeneficiary } from '../components/Beneficiary';
import Button from '../components/Button';
import TableHead from '../components/TableHead';
import TableRow from '../components/TableRow';
import API_ENDPOINT, { IDonation } from '../utils/constants';
import fetchHelper from '../utils/fetchHelpers';

type Props = {};

const Donors = (props: Props): JSX.Element => {
  const [donations, setDonations] = useState<IDonation[]>([]);
  useEffect(() => {
    const api = async () => {
      const data = await fetch(`${API_ENDPOINT}donation/`, {
        method: 'GET',
      });
      setDonations(await data.json());
    };

    api();
  }, [donations]);

  return (
  // <div classNameName=" h-full w-full p-4 ">
  //   <Button text="Create new Donor" type="submit" />
  //   {donations.map((donation) => (
  //     <div key={donation.donationId}>
  //       {donation.amount} {donation.category} {donation.donor.name}
  //     </div>
  //   ))}
  // </div>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="p-4">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <table className="w-full table-fixed border-4 text-center text-sm capitalize text-gray-500 dark:text-gray-400">
        <TableHead
          columnHeads={['ID', 'Donor', 'Amount', 'Category']}
        />
        <tbody>
          {donations.map((donation) => (
            <TableRow
              key={donation.id}
              fields={[
                donation.id,
                donation.donor.name,
                donation.amount,
                donation.category,
              ]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Donors;
