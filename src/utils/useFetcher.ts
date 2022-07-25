/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/authSlice';
import API_ENDPOINT from './constants';
import { fetchHelper } from './fetchHelpers';

function useFetcher(endpoint: string, resolver: (a: any) => any[]) {
  const [value, setValue] = useState<any>([]);
  const { token } = useSelector(authSelector);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchHelper(`${API_ENDPOINT}/${endpoint}/`, {
        method: 'GET',
        token,
      });
      setValue(resolver(result.data));
    };

    fetchData()
  }, []);

  return value;
}

export default useFetcher;
