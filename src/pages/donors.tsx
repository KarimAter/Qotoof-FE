/* eslint-disable consistent-return */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import useSWR from 'swr';
import API_ENDPOINT from '../utils/constants';
import { IDonor } from '../utils/interfaces';

type Props = {};

const donors = (props: Props): JSX.Element => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<IDonor[]>(`${API_ENDPOINT}donor/`, fetcher);

  // let output

  if (error) return <h4>An error has occurred</h4>;
  if (!data) return <h4> Loading </h4>;
  if (data) {
    return (
      <div className=" h-full p-4">
        {data.map((donor) => (
          <div key={donor.id}>
            {`${donor.name}${donor.referral}`}
          </div>
        ))}
      </div>
    );
  }
};
export default donors;
