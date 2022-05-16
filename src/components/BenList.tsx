import React from 'react'
import useSWR from 'swr';

type Props = {}
interface IBeneficiary {

    name:string;
}


const BenList = (props: Props):JSX.Element  => {

  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("http://localhost:8000/beneficiaryList", fetcher);

  // let output

  if (error) return <h4>"An error has occurred."</h4>;
  if (!data) return <h4>"Loading..."</h4>;
  if (data)
    return (
      <div className='bg-neutral-400 h-full p-4'>
        {data.map((x:IBeneficiary) => (
          <h4 >{x.name}</h4>
        ))}
      </div>
    );
 

}

export default BenList