import React, { useEffect, useState } from 'react';

interface IBeneficiaryProps {
  text: string;
  handleClick: (e?: React.SyntheticEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}

function Button(props: IBeneficiaryProps) {
  const { text, handleClick, type } = props;
  return (
    <button
      type={type || 'button'}
      onClick={handleClick}
      className="font-sm  mr-2
        h-8 w-fit rounded-lg bg-gradient-to-r from-primary to-secondary px-2 py-2 text-center
        text-xs text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-cyan-300 dark:focus:ring-cyan-800"
    >
      {text}
    </button>
  );
}
export default Button;
