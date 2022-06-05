
import React from 'react';
import { FieldError } from 'react-hook-form/dist/types/errors';
import { ChangeHandler, RefCallBack } from 'react-hook-form/dist/types/form';

interface IInput {
  text?: string;
  name: string;
  type?: 'text' | 'number';
  label: string;
  value?: string | number;
  error: FieldError;
  reg: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    name: string;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
  };
}

const Input = (props: IInput): JSX.Element => {
  const { name, type, label, error, reg, value } = props;

  return (
    <div className="p-2">
      <label
        htmlFor={name}
        className=" block text-sm font-normal text-textPrimary-900 dark:text-green-500"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        defaultValue={value}
        className="  rounded-lg border border-green-500 bg-green-50 p-2.5 text-sm
         text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500
          dark:border-green-500 dark:bg-gray-700 dark:text-green-400 dark:placeholder-green-500"
        {...reg}
      />
      {error && (
        <p className="mt-2 text-sm text-green-600 dark:text-green-500">
          {error?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
