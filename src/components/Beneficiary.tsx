import { useRouter } from 'next/router';
import React from 'react';
import API_ENDPOINT from '../utils/constants';
import fetchHelper from '../utils/fetchHelpers';
import { IBeneficiary } from '../utils/interfaces';
import Button from './Button';

function Beneficiary(ben: IBeneficiary) {
  const { id, name } = ben;
  const router = useRouter();

  const editBeneficiary = async () => {
    router.push({ pathname: '/benForm', query: { ...ben } }, '/edit');
  };

  const deleteBeneficiary = async () => {
    await fetchHelper(`${API_ENDPOINT}/beneficiary/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
  };

  return (
    <div className="m-4 flex h-16 min-h-fit justify-between rounded-md  border-2 bg-gray-100 shadow-md">
      <h2 className=" my-auto px-2 font-semibold text-textPrimary-700">
        {name}
      </h2>
      <div className="my-auto flex">
        <Button text="Edit" handleClick={editBeneficiary} />
        <Button text="Delete" handleClick={deleteBeneficiary} />
      </div>
    </div>
  );
}

export default Beneficiary;
