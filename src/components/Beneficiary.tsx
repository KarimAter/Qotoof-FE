import React from 'react';
import Button from './Button';

type Props = { name: string };

function Beneficiary(props: Props) {
  const { name } = props;

  const editBeneficiary = async () => {
    await fetch(`http://localhost:8000/beneficiary/editBeneficiary/${name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Karim' }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const deleteBeneficiary = async () => {
    await fetch(`http://localhost:8000/beneficiary/deleteBeneficiary/${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
