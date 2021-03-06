/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/authSlice';
import API_ENDPOINT from './constants';

function useFetcher(endpoint: string, resolver: (a: any) => any[]) {
  const [value, setValue] = useState<any>([]);
  const { token } = useSelector(authSelector);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${API_ENDPOINT}/${endpoint}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await data.json();
      setValue(resolver(result));
    };
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return value;
}

export default useFetcher;
