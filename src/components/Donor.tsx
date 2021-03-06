import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/authSlice';
import API_ENDPOINT from '../utils/constants';
import { fetchHelper } from '../utils/fetchHelpers';
import { IDonor } from '../utils/interfaces';
import Button from './Button';

const Donor = (donor: IDonor) => {
  const { token } = useSelector(authSelector);

  const { id, name, referral } = donor;
  const router = useRouter();
  const editDonor = async () => {
    router.push(
      {
        pathname: '/donorForm',
        query: { donor: JSON.stringify(donor) },
      },
      '/edit',
    );
  };
  const deleteDonor = async () => {
    await fetchHelper(`${API_ENDPOINT}/donor/`, {
      method: 'DELETE',
      token,
      body: JSON.stringify({ id }),
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
        <Button handleClick={editDonor}> Edit </Button>
        <Button handleClick={deleteDonor}> Delete </Button>
      </div>
    </div>
  );
};

export default Donor;
