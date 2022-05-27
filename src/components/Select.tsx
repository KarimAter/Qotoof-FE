/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import ReactSelect from 'react-select';
import { IDonation, IDonor } from '../utils/interfaces';

type Props = {
  options: IDonor[];
  control: Control<IDonation>;
  error: FieldError;
};

const Select = ({ options, error, control }: Props) => {
  return (
    <div
      className=" rounded-lg border-green-500 bg-green-50 p-2 text-sm
          text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500
          dark:border-green-500 dark:bg-gray-700 dark:text-green-400 dark:placeholder-green-500"
    >
      <label
        htmlFor="donor"
        className=" block text-sm font-normal text-textPrimary-900 dark:text-green-500"
      >
        Donor Name
      </label>
      <Controller
        name="donor"
        control={control}
        render={({ field }) => (
          <ReactSelect
            className=" rounded-lg"
            {...field}
            instanceId="unique"
            options={options}
            isClearable
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.name}
          />
        )}
      />
      <p>{error?.message}</p>
    </div>
  );
};

export default Select;
