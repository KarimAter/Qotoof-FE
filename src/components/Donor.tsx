/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { useRouter } from 'next/router';
import React from 'react';
import { IDonor } from '../utils/interfaces';
import Button from './Button';

const Donor = (donor: IDonor) => {
  const { id, name, referral } = donor;
  const router = useRouter();
  const editDonor = async () => {
    router.push({
      pathname: '/donForm',
      query: { id, name, referral: referral.id },
    });
  };

  return (
    <div className="m-4 flex h-16 min-h-fit justify-between rounded-md  border-2 bg-gray-100 shadow-md">
      <h2 className=" my-auto px-2 font-semibold text-textPrimary-700">
        {name}
      </h2>
      <h2 className=" my-auto px-2 font-semibold text-textPrimary-700">
        {referral.name}
      </h2>
      <div className="my-auto flex">
        <Button text="Edit" handleClick={editDonor} />
      </div>
    </div>
  );
};

export default Donor;
