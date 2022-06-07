/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import * as yup from 'yup';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Button from '../components/Button';

type Props = {};

const Signin = () => {
  const [loggedIn, setloggedIn] = useState(false);
  if (localStorage.getItem('token') && !loggedIn) setloggedIn(true);
  return loggedIn ? (
    <Button
      text="Signout"
      type="submit"
      handleClick={() => {
        localStorage.removeItem('token');
        setloggedIn(false);
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
