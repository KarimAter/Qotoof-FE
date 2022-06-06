import React from 'react';
import { boolean } from 'yup';

interface IButton {
  text: string;
  handleClick?: (e?: React.SyntheticEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

function Button(props: IButton) {
  const { text, handleClick, type, disabled } = props;
  return (
    <button
      type={type || 'button'}
      onClick={handleClick}
      disabled={disabled}
      className="font-sm  mr-2
        h-8 w-fit rounded-lg bg-gradient-to-r from-primary to-secondary px-2 py-2 text-center
        text-xs text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4
         focus:ring-cyan-300 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 
         disabled:shadow-none dark:focus:ring-cyan-800"
    >
      {text}
    </button>
  );
}
export default Button;
