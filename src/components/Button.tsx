import React from 'react'
import { text } from 'stream/consumers';

type IBeneficiaryProps = {
  text: string;
  handleClick: (e?: React.SyntheticEvent) => {};
  type?: "button" | "submit" | "reset";
};

const Button = (props: IBeneficiaryProps) => {
  const { text, handleClick, type } = props;
  return (
    <button
      type={type || "button"}
      onClick={handleClick}
      className="text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-bl 
    focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-sm rounded-lg text-xs px-2 py-2 
    text-center mr-2 w-fit h-8"
    >
      {text}
    </button>
  );
};
export default Button;