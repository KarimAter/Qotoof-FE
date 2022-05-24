import React from 'react';
import API_ENDPOINT from '../utils/constants';
import fetchHelper from '../utils/fetchHelpers';
import Button from './Button';

type Props = { name: string };

function Beneficiary(props: Props) {
  const { name } = props;

  const editBeneficiary = async () => {
    await fetchHelper(`${API_ENDPOINT}/:${name}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentName: name, targetName: 'Karim' }),
    });
  };

  const deleteBeneficiary = async () => {
    await fetchHelper(`${API_ENDPOINT}/:${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ currentName: name }),
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
