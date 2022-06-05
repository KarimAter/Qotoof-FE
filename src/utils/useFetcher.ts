/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import API_ENDPOINT from './constants';

function useFetcher(endpoint: string, resolver: (a: any) => any[]) {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${API_ENDPOINT}/${endpoint}/`);
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
