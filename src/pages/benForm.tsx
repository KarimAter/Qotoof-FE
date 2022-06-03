import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import API_ENDPOINT from '../utils/constants';
import Button from '../components/Button';
import Input from '../components/Input';
import { IBeneficiary } from '../utils/interfaces';
import fetchHelper from '../utils/fetchHelpers';

type Props = {};

const schema = yup.object().shape({ name: yup.string().required().min(3) });

function BenForm(props: Props) {
  const router = useRouter();
  const updatedBeneficiary = router.query;

  const [response, setResponse] = useState<JSX.Element | string>('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IBeneficiary>({ resolver: yupResolver(schema) });

  const submitData = async (ben: IBeneficiary) => {
    if (updatedBeneficiary?.name) {
      await fetchHelper(`${API_ENDPOINT}beneficiary/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: updatedBeneficiary.id,
          targetName: ben.name,
        }),
      });
    } else {
      await fetchHelper(`${API_ENDPOINT}beneficiary/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ beneficiaryName: ben.name }),
      });
    }
  };
  return (
    <div className="w-full">
      <h2>New Beneficiary</h2>
      <form onSubmit={handleSubmit(submitData)}>
        <Input
          name="name"
          label="benName"
          value={updatedBeneficiary?.name?.toString()}
          reg={{ ...register('name') }}
          error={errors.name}
        />
        <Button
          text={updatedBeneficiary.name ? 'Update' : 'Add'}
          type="submit"
        />
      </form>
      <h4>{response}</h4>
    </div>
  );
}

export default BenForm;
