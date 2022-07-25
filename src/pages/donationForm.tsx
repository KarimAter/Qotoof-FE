import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API_ENDPOINT, { DonationCategory } from '../utils/constants';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import useFetcher from '../utils/useFetcher';
import { IDonation, IDonor } from '../utils/interfaces';
import { fetchHelper } from '../utils/fetchHelpers';
import { authSelector } from '../redux/authSlice';

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
    .min(1),
  category: yup.string(),
});

function DonationForm(props: Props) {
  const [response, setResponse] = useState<JSX.Element | string>('');
  const { token } = useSelector(authSelector);

  const router = useRouter();
  let updatedDonation: IDonation;
  const { payload } = router.query;

  if (payload) {
    const updatedDonationJson = Array.isArray(payload) ? payload[0] : payload;
    updatedDonation = JSON.parse(updatedDonationJson);
    console.log(updatedDonation);
  }

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
    if (updatedDonation) {
      await fetchHelper(
        `${API_ENDPOINT}/donation/`,
        {
          method: 'PUT',
          token,
          body: JSON.stringify({
            id: updatedDonation.id,
            ...donation,
          }),
        },
        'donation is updated',
      );
    } else {
      await fetchHelper(
        `${API_ENDPOINT}/donation/`,
        {
          method: 'POST',
          token,
          body: JSON.stringify({
            ...donation,
          }),
        },
        'donation is added',
      );
    }
  };

  return (
    <div className="w-full">
      <h2>New Beneficiary</h2>
      <form onSubmit={handleSubmit(submitData)} className="ml-8 block w-1/3">
        <Select
          error={errors.donor?.name}
          options={donorsList}
          control={control}
          fieldLabel="donor"
          valuee={updatedDonation?.donor}
        />
        <Input
          type="number"
          name="amount"
          label="amount"
          reg={{ ...register('amount') }}
          error={errors.amount}
          value={updatedDonation?.amount}
        />
        <Select
          error={errors.category}
          options={DonationCategory}
          control={control}
          fieldLabel="category"
          valuee={{ name: updatedDonation?.category }}
        />
        <Button type="submit">{updatedDonation ? 'Update' : 'Add'} </Button>

        <ToastContainer position="bottom-right" />
      </form>
      <h4>{response}</h4>
    </div>
  );
}

export default DonationForm;
