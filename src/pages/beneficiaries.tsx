/* eslint-disable consistent-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/named */
import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import API_ENDPOINT from '../utils/constants';
import Beneficiary from '../components/Beneficiary';
import Button from '../components/Button';
import { IBeneficiary } from '../utils/interfaces';

type Props = {};

function beneficiaries() {
  const router = useRouter();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<IBeneficiary[]>(
    `${API_ENDPOINT}beneficiary/`,
    fetcher,
  );

  const goToForm = () => {
    router.push('/benForm');
  };

  if (error) return <h4>An error has occurred</h4>;
  if (!data) return <h4> Loading </h4>;
  if (data) {
    return (
      <div className=" h-full w-full p-4 ">
        <Button
          handleClick={goToForm}
          text="Create new beneficiary"
          type="submit"
        />
        {data.map((beneficiary: IBeneficiary) => (
          <div key={beneficiary.id}>
            <Beneficiary {...beneficiary} />
          </div>
        ))}
      </div>
    );
  }
}

export default beneficiaries;
