/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import API_ENDPOINT from '../utils/constants';
import Button from '../components/Button';
import { IBeneficiary } from '../components/Beneficiary';
import Input from '../components/Input';

type Props = {};

const schema = yup.object().shape({ name: yup.string().required().min(3) });

function BenForm(props: Props) {
  const [response, setResponse] = useState<JSX.Element | string>('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IBeneficiary>({ resolver: yupResolver(schema) });

  const submitData = async (ben: IBeneficiary) => {
    // e.preventDefault();
    try {
      const res = await fetch(`${API_ENDPOINT}beneficiary/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ beneficiaryName: ben.name }),
      });
      const data = await res.json();
      setResponse(`${data.name} is added successfully`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <h2>New Beneficiary</h2>
      <form onSubmit={handleSubmit(submitData)}>
        <Input
          name="name"
          label="benName"
          reg={{ ...register('name') }}
          errors={errors}
        />
        <Button text="Add Beneficiary" type="submit" />
      </form>
      <h4>{response}</h4>
    </div>
  );
}

export default BenForm;
