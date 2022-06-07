import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import API_ENDPOINT from '../utils/constants';
import fetchHelper from '../utils/fetchHelpers';
import { IUser } from '../utils/interfaces';
import Button from './Button';
import Input from './Input';

type Props = {};
const logInschema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = (props: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(logInschema) });

  const submitData = async (user: IUser) => {
    const response = await fetchHelper(`${API_ENDPOINT}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...user,
      }),
    });
    localStorage.setItem('token', response.token);
    router.push({ pathname: '/'});
  };

  return (
    <div className=" ">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit(submitData)}>
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

        <Button text="Log in" type="submit" />
      </form>
    </div>
  );
};

export default Login;
