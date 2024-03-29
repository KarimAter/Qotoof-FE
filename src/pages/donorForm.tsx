import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import API_ENDPOINT from '../utils/constants';
import Button from '../components/Button';
import Input from '../components/Input';
import { IBeneficiary, IDonor, IUser } from '../utils/interfaces';
import { fetchHelper } from '../utils/fetchHelpers';
import Select from '../components/Select';
import useFetcher from '../utils/useFetcher';
import { authSelector } from '../redux/authSlice';

const schema = yup.object().shape({
  name: yup.string().required('donor name is required'),
  referral: yup.object().shape({
    name: yup.string().required('referral name is required'),
    id: yup.number().required('referral id is required'),
  }),
});

function DonorForm() {
  const { token } = useSelector(authSelector);

  const router = useRouter();
  let updatedDonor: IDonor;
  if (router.query.donor) {
    const updatedDonorO = Array.isArray(router.query.donor)
      ? router.query.donor[0]
      : router.query.donor;
    updatedDonor = JSON.parse(updatedDonorO);
  }

  const [response, setResponse] = useState<JSX.Element | string>('');

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IDonor>({ resolver: yupResolver(schema) });

  const referralsList: IUser[] = useFetcher(`user`, (arr: IUser[]): IUser[] =>
    arr.map((d) => d),
  );

  const submitData = async (donor: IDonor) => {
    console.log(token);
    if (updatedDonor) {
      await fetchHelper(`${API_ENDPOINT}/donor/`, {
        method: 'PUT',
        token,
        body: JSON.stringify({
          id: updatedDonor.id,
          name: donor.name,
          referral: donor.referral,
        }),
      });
    } else {
      await fetchHelper(`${API_ENDPOINT}/donor/`, {
        method: 'POST',
        token,
        body: JSON.stringify(donor),
      });
    }
  };
  return (
    <div className="w-full">
      <h2>New Donor</h2>
      <form onSubmit={handleSubmit(submitData)} className="ml-8 block w-1/3">
        <Input
          name="name"
          label="Donor Name"
          value={updatedDonor?.name?.toString()}
          reg={{ ...register('name') }}
          error={errors.name}
        />
        <Select
          error={errors.referral?.name}
          options={referralsList}
          control={control}
          fieldLabel="referral"
          valuee={updatedDonor?.referral}
        />
        <Button type="submit">{updatedDonor?.name ? 'Update' : 'Add'} </Button>
      </form>
      <h4>{response}</h4>
    </div>
  );
}

export default DonorForm;
