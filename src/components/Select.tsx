import React from 'react';
import { Controller, FieldError } from 'react-hook-form';
import ReactSelect from 'react-select';
import {
  IBeneficiary,
  IDonation,
  IDonor,
  IExpense,
  IUser,
} from '../utils/interfaces';

type Props = {
  options: IDonor[] | IUser[] | IBeneficiary[];
  control: any;
  error: FieldError;
  fieldLabel: string;
  value?: any;
};

const Select = ({ options, error, control, fieldLabel, value }: Props) => {
  console.log(error);
  return (
    <div
      className=" rounded-lg border-green-500 bg-green-50 p-2 text-sm
          text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500
          dark:border-green-500 dark:bg-gray-700 dark:text-green-400 dark:placeholder-green-500"
    >
      <label
        htmlFor={fieldLabel}
        className=" block text-sm font-normal text-textPrimary-900 dark:text-green-500"
      >
        {fieldLabel}
      </label>
      <Controller
        control={control}
        name={fieldLabel}
        defaultValue={value}
        render={({ field }) => (
          <ReactSelect
            className=" rounded-lg"
            {...field}
            instanceId="unique"
            options={options}
            isClearable
            getOptionLabel={(option: IDonor | IUser | IBeneficiary) =>
              option.name
            }
            getOptionValue={(option: IDonor | IUser | IBeneficiary) =>
              option.name
            }
          />
        )}
      />
      <p>{error?.message}</p>
    </div>
  );
};

export default Select;
