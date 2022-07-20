import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useSelector } from 'react-redux';
import API_ENDPOINT from '../utils/constants';
import Beneficiary from '../components/Beneficiary';
import Button from '../components/Button';
import { IBeneficiary } from '../utils/interfaces';
import { authSelector } from '../redux/authSlice';
import { fetcher } from '../utils/fetchHelpers';

type Props = {};

const beneficiaries = (): JSX.Element => {
  const { token } = useSelector(authSelector);

  const router = useRouter();
  const { data, error } = useSWR<IBeneficiary[]>(
    [`${API_ENDPOINT}/beneficiary/`, token],
    fetcher,
  );

  const goToForm = () => {
    router.push('/benForm');
  };

  if (error) {
    console.log(error.message);
    router.push({ pathname: '/Sign' });
    return <h4>{error.message}</h4>;
  }
  if (!data) return <h4> Loading </h4>;
  if (data) {
    return (
      <div className=" h-full w-full p-4 ">
        <Button handleClick={goToForm} type="submit">
          Create new beneficiary{' '}
        </Button>
        {data.map((beneficiary: IBeneficiary) => (
          <div key={beneficiary.id}>
            <Beneficiary {...beneficiary} />
          </div>
        ))}
      </div>
    );
  }
};

export default beneficiaries;
