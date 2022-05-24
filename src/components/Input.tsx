/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { ChangeHandler, RefCallBack } from 'react-hook-form/dist/types/form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { IBeneficiary } from './Beneficiary';

interface IInput {
  text?: string;
  name: string;
  type?: 'text';
  label: string;
  errors: FieldErrors<IBeneficiary>;
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
  const { text, name, type, label, errors, reg } = props;
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
        className=" block w-1/2 rounded-lg border border-green-500 bg-green-50 p-2.5 text-sm
         text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500
          dark:border-green-500 dark:bg-gray-700 dark:text-green-400 dark:placeholder-green-500"
        {...reg}
      />
      {errors && (
        <p className="mt-2 text-sm text-green-600 dark:text-green-500">
          <span className="font-medium">{errors?.name?.message}</span>
        </p>
      )}
    </div>
  );
};

export default Input;
