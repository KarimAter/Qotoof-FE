import React from 'react'

type Props = { text: string; handleClick: () => {} };

const Button = ({ text, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl 
    focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-sm rounded-lg text-xs px-2 py-2 
    text-center mr-2 w-fit h-8"
    >
      {text}
    </button>
  );
};
export default Button;