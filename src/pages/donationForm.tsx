/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import API_ENDPOINT, { IDonation } from '../utils/constants';
import Button from '../components/Button';
import { IBeneficiary } from '../components/Beneficiary';
import Input from '../components/Input';
import Select from '../components/Select';
import { IDonor } from './donors';

type Props = {};

const schema = yup.object().shape({
  donor: yup.object().shape({ name: yup.string().min(4) }),
  amount: yup.number().required().min(0),
  category: yup.string().required().min(0),
});

function DonationForm(props: Props) {
  const [response, setResponse] = useState<JSX.Element | string>('');
  const [donorsList, setDonorList] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IDonation>({ resolver: yupResolver(schema) });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${API_ENDPOINT}donor/`);
      const result = await data.json();
      setDonorList(result.map((donor: IDonor) => donor.name));
    };
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const submitData = async (donation: IDonation) => {
    console.log(donation);
    // e.preventDefault();
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
        {/* <Input
          name="donor.name"
          label="Donor Name"
          reg={{ ...register('donor.name') }}
          error={errors.donor?.name}
        /> */}
        <Select options={donorsList} />
        <Input
          name="amount"
          label="amount"
          reg={{ ...register('amount') }}
          error={errors.amount}
        />
        <Input
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
