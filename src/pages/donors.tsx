/* eslint-disable no-shadow */

import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import Button from '../components/Button';
import Donor from '../components/Donor';
import { authSelector } from '../redux/authSlice';
import API_ENDPOINT from '../utils/constants';
import { IDonor } from '../utils/interfaces';

type Props = {};

const donors = (props: Props): JSX.Element => {
  const { token } = useSelector(authSelector);

  const fetcher = (url: string, token: string) =>
    fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) =>
      res.json(),
    );
  const { data, error } = useSWR<IDonor[]>(
    [`${API_ENDPOINT}/donor/`, token],
    fetcher,
  );
  const router = useRouter();
  // let output
  const goToForm = () => {
    router.push('/donorForm');
  };

  if (error) return <h4>An error has occurred</h4>;
  if (!data) return <h4> Loading </h4>;
  console.log(data);
  if (data) {
    return (
      <div className=" h-full w-full p-4">
        <Button handleClick={goToForm} type="submit">
          Create new Donor
        </Button>
        {data.map((donor) => (
          <Donor key={donor.id} {...donor} />
        ))}
      </div>
    );
  }
};
export default donors;
