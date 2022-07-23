import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import API_ENDPOINT, { Role, SelectOption } from '../utils/constants';
import { fetchHelper } from '../utils/fetchHelpers';
import { IUser } from '../utils/interfaces';
import Button from './Button';
import Input from './Input';
import Select from './Select';

type Props = {};

const signUpschema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().email().required(),
  password: yup.string().required(),
  role: yup.string().required(),
});

const Signup = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<IUser>({ resolver: yupResolver(signUpschema) });

  const ops: SelectOption[] = [];
  Object.keys(Role)
    .filter((key) => key.match(/[A-Z]/))
    .map((key) => ops.push({ name: key }));

  const submitData = async (user: IUser) => {
    // if (updatedBeneficiary?.name) {
    await fetchHelper(`${API_ENDPOINT}/user/`, {
      method: 'POST',
      body: JSON.stringify({
        ...user,
      }),
    });
  };
  return (
    <div className=" ">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(submitData)}>
        <Input
          name="name"
          label="userName"
          reg={{ ...register('name') }}
          error={errors.name}
        />
        <Input
          name="email"
          label="Email"
          reg={{ ...register('email') }}
          error={errors.email}
        />
        <Input
          name="password"
          label="Password"
          reg={{ ...register('password') }}
          error={errors.password}
        />
        <Select
          error={errors.role}
          options={ops}
          control={control}
          fieldLabel="role"
          // valuee={{ name: upda?.category }}
        />
        <Button type="submit">Sign up </Button>
      </form>
    </div>
  );
};

export default Signup;
