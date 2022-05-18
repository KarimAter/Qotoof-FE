import React, { useEffect, useState } from 'react';

interface IBeneficiaryProps {
  text: string;
  handleClick: (e?: React.SyntheticEvent) => {};
  type?: 'button' | 'submit' | 'reset';
}

function Button(props: IBeneficiaryProps) {
  const { text, handleClick, type } = props;
  const [count, setcoun] = useState('second');

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <button
      type={type || 'button'}
              onClick={handleClick}
        className="text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-bl
    focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-sm rounded-lg text-xs px-2 py-2
    text-center mr-2 w-fit h-8"
    >
      {text}
    </button>
  );
}
export default Button;
