/* eslint-disable no-nested-ternary */
import React from 'react';
import { Controller, FieldError } from 'react-hook-form';
import ReactSelect from 'react-select';
import { SelectOption } from '../utils/constants';
import {
  IBeneficiary,
  IDonation,
  IDonor,
  IExpense,
  IUser,
} from '../utils/interfaces';

type Props = {
  options: IDonor[] | IUser[] | IBeneficiary[] | SelectOption[];
  control: any;
  error: FieldError;
  fieldLabel: string;
  valuee?: any;
};

const Select = ({ options, error, control, fieldLabel, valuee }: Props) => {
  // console.log(error);
  console.log(valuee);
  // console.log(options);
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
        defaultValue={
          valuee?.id ? valuee : options.find((o) => o.name === valuee)
        }
        render={({ field: { onChange, value, ref } }) => {
          console.log(value);
          return (
            <ReactSelect
              // value={options.find((c) => c.name === value?.name)}
              className=" rounded-lg"
              instanceId="unique"
              ref={ref}
              options={options}
              // value={
              //   valuee?.id ? valuee : valuee
              // }
              // value={options.find((selectedOption: any) =>
              //   selectedOption?.id ? selectedOption : selectedOption?.name,
              // )}
              value={
                value
                  ? value?.id
                    ? options.find((o) => o.name === value.name)
                    : options.find((o) => o === value)
                  : valuee?.id
                    ? options.find((o) => o.name === valuee?.name)
                    : options.find((o) => o.name === valuee?.name)
              }
              isClearable
              getOptionLabel={(
                option: IDonor | IUser | IBeneficiary | SelectOption,
              ) => option.name}
              getOptionValue={(
                option: IDonor | IUser | IBeneficiary | SelectOption,
              ) => option.name}
              onChange={(selectedOption: any) => {
                console.log(selectedOption);
                onChange(
                  selectedOption?.id ? selectedOption : selectedOption?.name,
                );
              }}
            />
          );
        }}
      />
      <p>{error?.message}</p>
    </div>
  );
};

export default Select;
