/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Button from '../components/Button';
import { AppDispatch } from '../redux/store';
import { authSelector, logout } from '../redux/authSlice';
import { IUser } from '../utils/interfaces';

type Props = {};

const Signin = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector(authSelector);
  //

  if (token !== '' && !loggedIn) setloggedIn(true);
  return loggedIn ? (
    <Button
      // text="Signout"
      type="submit"
      handleClick={() => {
        setloggedIn(false);
        dispatch(logout());
      }}
    >
      Signout
    </Button>
  ) : (
    <div className="flex w-full flex-row justify-evenly justify-items-center">
      <Signup />
      <Login />
    </div>
  );
};

export default Signin;
