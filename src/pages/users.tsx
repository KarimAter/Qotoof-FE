/* eslint-disable no-unused-expressions */
import React from 'react';
import router from 'next/router';
import useSWR from 'swr';
import { useSelector } from 'react-redux';
import { IUser } from '../utils/interfaces';
import Table from '../components/Table';
import Button from '../components/Button';
import API_ENDPOINT from '../utils/constants';
import { authSelector } from '../redux/authSlice';
import { fetcher } from '../utils/fetchHelpers';

type Props = {};

const Users = () => {
  const { token } = useSelector(authSelector);

  const { data, error } = useSWR<IUser[]>(
    [`${API_ENDPOINT}/user/`, token],
    fetcher,
  );
  const goToForm = (e?: React.SyntheticEvent) => {
    router.push('/donationForm');
  };

  if (error) {
    console.log(error.message);
    router.push({ pathname: '/Sign' });
    return <h4>{error.message}</h4>;
  }
  if (!data) return <h4> Loading </h4>;
  if (data) {
    return (
      <div className="m-2 w-full overflow-x-auto shadow-md sm:rounded-lg">
        <Button type="submit" handleClick={goToForm}>
          Create new User
        </Button>
        <div className="p-4">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        {data.length > 0 && <Table models={data} />}
      </div>
    );
  }

  // const [loggedIn, setloggedIn] = useState(false);
  // const dispatch = useDispatch<AppDispatch>();
  // const { token } = useSelector(authSelector);
  // //

  // if (token !== '' && !loggedIn) setloggedIn(true);
  // return loggedIn ? (
  //   <Button
  //     // text="Signout"
  //     type="submit"
  //     handleClick={() => {
  //       setloggedIn(false);
  //       dispatch(logout());
  //     }}
  //   >
  //     Signout
  //   </Button>
  // ) : (
  //   <div className="flex w-full flex-row justify-evenly justify-items-center">
  //     <Signup />
  //     <Login />
  //   </div>
  // );
};

export default Users;
