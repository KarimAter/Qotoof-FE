/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Button from '../components/Button';
import { AppDispatch } from '../redux/store';
import { logout } from '../redux/authSlice';

type Props = {};

const Signin = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  if (localStorage.getItem('token') && !loggedIn) setloggedIn(true);
  return loggedIn ? (
    <Button
      text="Signout"
      type="submit"
      handleClick={() => {
        localStorage.removeItem('token');
        setloggedIn(false);
        dispatch(logout())
      }}
    />
  ) : (
    <div className="flex w-full flex-row justify-evenly justify-items-center">
      <Signup />
      <Login />
    </div>
  );
};

export default Signin;
