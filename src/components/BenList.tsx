import React from 'react';
import useSWR from 'swr';
import Beneficiary from './Beneficiary';

type Props = {};
interface IBeneficiary {
  name: string;
}

function BenList(): JSX.Element {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    'http://localhost:8000/beneficiary/beneficiaryList',
    fetcher,
  );

  // let output

  if (error) return <h4>An error has occurred</h4>;
  if (!data) return <h4> Loading </h4>;
  if (data) {
    return (
      <div className=" h-full p-4">
        {data.map((beneficiary: IBeneficiary) => (
          <div key={beneficiary.name}>
            <Beneficiary name={beneficiary.name} />
          </div>
        ))}
      </div>
    );
  }
}

export default BenList;
