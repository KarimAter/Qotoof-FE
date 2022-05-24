/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/named */
import React from 'react';
import useSWR from 'swr';
import API_ENDPOINT from '../utils/constants';
import Beneficiary, { IBeneficiary } from './Beneficiary';

type Props = {};
// interface IBeneficiary {
//   id: number;
//   name: string;
// }

function BenList(): JSX.Element {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<IBeneficiary[]>(`${API_ENDPOINT}beneficiary/`, fetcher);

  // let output

  if (error) return <h4>An error has occurred</h4>;
  if (!data) return <h4> Loading </h4>;
  if (data) {
    return (
      <div className=" h-full p-4">
        {data.map((beneficiary: IBeneficiary) => (
          <div key={beneficiary.id}>
            <Beneficiary {...beneficiary} />
          </div>
        ))}
      </div>
    );
  }
}

export default BenList;
