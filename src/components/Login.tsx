import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { login, setToken } from '../redux/authSlice';
import { AppDispatch } from '../redux/store';
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
  const [authError, setAuthError] = useState('');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(logInschema) });

  const dispatch = useDispatch<AppDispatch>();
  const submitData = async (user: IUser) => {
    const { data, status } = await fetchHelper(`${API_ENDPOINT}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...user,
      }),
    });
    console.log(data, status);
    if (status !== 403) {
      // localStorage.setItem('token', data.token);
      dispatch(setToken(data.token));
      dispatch(login(data.user));
      router.push({ pathname: '/' });
    } else {
      setAuthError(data.msg);
    }
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
        {authError && <p>{authError}</p>}
      </form>
    </div>
  );
};

export default Login;
