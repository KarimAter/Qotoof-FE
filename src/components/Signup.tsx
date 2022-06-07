import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import API_ENDPOINT from '../utils/constants';
import fetchHelper from '../utils/fetchHelpers';
import { IUser } from '../utils/interfaces';
import Button from './Button';
import Input from './Input';

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
  } = useForm<IUser>({ resolver: yupResolver(signUpschema) });

  const submitData = async (user: IUser) => {
    // if (updatedBeneficiary?.name) {
    await fetchHelper(`${API_ENDPOINT}/user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...user,
      }),
    });
    // } else {
    //   await fetchHelper(`${API_ENDPOINT}/beneficiary/`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ beneficiaryName: ben.name }),
    //   });
    // }
  };
  return (
    <div className=' '>
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
        <Input
          name="role"
          label="Role"
          reg={{ ...register('role') }}
          error={errors.role}
        />
        <Button text="Sign Up" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
