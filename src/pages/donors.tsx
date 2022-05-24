/* eslint-disable consistent-return */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import useSWR from 'swr';
import { IBeneficiary } from '../components/Beneficiary';
import API_ENDPOINT from '../utils/constants';

type Props = {};

export interface IUser {
  id: number;
  name: string;
  email?: string;
  password?: string;
  role: 'ADMIN' | 'GUEST' | 'SUPER' | 'EDITOR';
}
export interface IDonor {
  id: number;
  name: string;
  referral: IUser;
}

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
            {/* <Beneficiary {...beneficiary} /> */}
            {`${donor.name}${donor.referral}`}
          </div>
        ))}
      </div>
    );
  }
};
export default donors;
