/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import Button from '../components/Button';
import Donor from '../components/Donor';
import API_ENDPOINT from '../utils/constants';
import { IDonor } from '../utils/interfaces';

type Props = {};

const donors = (props: Props): JSX.Element => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<IDonor[]>(`${API_ENDPOINT}donor/`, fetcher);
  const router = useRouter();
  // let output
  const goToForm = () => {
    router.push('/donorForm');
  };

  if (error) return <h4>An error has occurred</h4>;
  if (!data) return <h4> Loading </h4>;
  if (data) {
    return (
      <div className=" h-full w-full p-4">
        <Button
          handleClick={goToForm}
          text="Create new Donor"
          type="submit"
        />
        {data.map((donor) => (
          <Donor key={donor.id} {...donor} />
        ))}
      </div>
    );
  }
};
export default donors;
