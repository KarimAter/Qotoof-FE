import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import API_ENDPOINT from '../utils/constants';
import { IBeneficiary, IExpense, IUser } from '../utils/interfaces';
import useFetcher from '../utils/useFetcher';
import fetchHelper from '../utils/fetchHelpers';

const schema = yup.object().shape({
  beneficiary: yup.object().shape({
    name: yup.string().required('ben name is required'),
    id: yup.number().required('ben id is required'),
  }),
  user: yup.object().shape({
    name: yup.string().required('user name is required'),
    id: yup.number().required('user id is required'),
  }),
  amount: yup
    .number()
    .typeError('Amount has to be a number')
    .required('donation amount is required')
    .min(1),
  category: yup.string().required('category is required').min(0),
});

type Props = {};

function ExpenseForm(props: Props) {
  const [response, setResponse] = useState<JSX.Element | string>('');

  const router = useRouter();
  let updatedExpense: IExpense;
  const { payload } = router.query;

  if (payload) {
    const updatedExpenseJson = Array.isArray(payload) ? payload[0] : payload;
    updatedExpense = JSON.parse(updatedExpenseJson);
  }
  console.log(updatedExpense);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IExpense>({ resolver: yupResolver(schema) });

  const usersList: IUser[] = useFetcher(`user`, (arr: IUser[]): IUser[] =>
    arr.map((d) => d),
  );
  const benList: IBeneficiary[] = useFetcher(
    `beneficiary`,
    (arr: IBeneficiary[]): IBeneficiary[] => arr.map((d) => d),
  );
  console.log(errors);
  const submitData = async (expense: IExpense) => {
    if (updatedExpense) {
      await fetchHelper(`${API_ENDPOINT}/expense/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: updatedExpense.id,
          ...expense,
        }),
      });
    } else {
      await fetchHelper(`${API_ENDPOINT}/expense/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...expense,
        }),
      });
    }
  };

  return (
    <div className="w-full">
      <h2>New Expense</h2>
      <form onSubmit={handleSubmit(submitData)} className="ml-8 block w-1/3">
        <Select
          error={errors.beneficiary?.name}
          options={benList}
          control={control}
          fieldLabel="beneficiary"
          value={updatedExpense?.beneficiary}
        />
        <Select
          error={errors.user?.name}
          options={usersList}
          control={control}
          fieldLabel="user"
          value={updatedExpense?.user}
        />
        <Input
          type="number"
          name="amount"
          label="amount"
          reg={{ ...register('amount') }}
          error={errors.amount}
          value={updatedExpense?.amount}
        />
        <Input
          type="text"
          name="category"
          label="category"
          reg={{ ...register('category') }}
          error={errors.category}
          value={updatedExpense?.category}
        />

        <Button text={updatedExpense ? 'Update' : 'Add'} type="submit" />
      </form>
      <h4>{response}</h4>
    </div>
  );
}

export default ExpenseForm;
