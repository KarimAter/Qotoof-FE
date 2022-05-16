import React from 'react'

type Props = {name:string}

const Beneficiary = ({ name }) => {
  return (
    <div className='h-20 border-green-900 border-solid m-4 border-2'>
      <h2 className='p-2'>{name}</h2>
    </div>
  );
};

export default Beneficiary