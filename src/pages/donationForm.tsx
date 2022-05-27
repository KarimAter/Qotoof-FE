/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ActionMeta } from 'react-select';
import API_ENDPOINT from '../utils/constants';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import useFetcher from '../utils/useFetcher';
import { IDonation, IDonor } from '../utils/interfaces';

type Props = {};

const schema = yup.object().shape({
  donor: yup.object().shape({
    name: yup.string().required('donor name is required'),
    id: yup.number().required('donor id is required'),
  }),
  amount: yup
    .number()
    .typeError('Amount has to be a number')
    .required('donation amount is required')
    .min(0),
  category: yup.string().required('category is required').min(0),
});

function DonationForm(props: Props) {
  const [response, setResponse] = useState<JSX.Element | string>('');

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IDonation>({ resolver: yupResolver(schema) });

  const donorsList: IDonor[] = useFetcher(`donor`, (arr: IDonor[]): IDonor[] =>
    arr.map((d) => d),
  );

  const submitData = async (donation: IDonation) => {
    console.log(donation);
    try {
      const res = await fetch(`${API_ENDPOINT}donation/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donation),
      });
      const donat = await res.json();
      setResponse(`${donat.amount} is added successfully`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <h2>New Beneficiary</h2>
      <form onSubmit={handleSubmit(submitData)}>
        <Select
          error={errors.donor?.name}
          options={donorsList}
          control={control}
          handleSelect={(option) => {
            console.log(option);
          }}
        />
        <Input
          type="number"
          name="amount"
          label="amount"
          reg={{ ...register('amount') }}
          error={errors.amount}
        />
        <Input
          type="text"
          name="category"
          label="category"
          reg={{ ...register('category') }}
          error={errors.category}
        />

        <Button text="Add Donation" type="submit" />
      </form>
      <h4>{response}</h4>
    </div>
  );
}

export default DonationForm;
