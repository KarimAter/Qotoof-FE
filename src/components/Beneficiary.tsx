import React from 'react';
import fetchHelper from '../utils/fetchHelpers';
import Button from './Button';

type Props = { name: string };

function Beneficiary(props: Props) {
  const { name } = props;

  

  const editBeneficiary = async () => {
    await fetchHelper(
      `http://localhost:8000/beneficiary/editBeneficiary/${name}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Karim' }),
      },
    );
  };

  const deleteBeneficiary = async () => {
    await fetchHelper(
      `http://localhost:8000/beneficiary/deleteBeneficiary/${name}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };

  return (
    <div
      className="flex justify-between min-h-fit h-16 rounded-md bg-gray-100  m-4 border-2
    shadow-md"
    >
      <h2 className=" px-2 font-semibold text-textPrimary-700 my-auto">
        {name}
      </h2>
      <div className="flex my-auto">
        <Button text="Edit" handleClick={editBeneficiary} />
        <Button text="Delete" handleClick={deleteBeneficiary} />
      </div>
    </div>
  );
}

export default Beneficiary;
