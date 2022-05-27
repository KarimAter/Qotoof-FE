/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import ReactSelect, { ActionMeta } from 'react-select';
import { IDonation, IDonor } from '../utils/interfaces';

type Props = {
  options: IDonor[];
  control: Control<IDonation>;
  handleSelect: (
    newValue: { label: string; value: string },
    actionMeta: ActionMeta<{ label: string; value: string }>,
  ) => void;
  error: FieldError;
};

const Select = ({ options, error, control }: Props) => {
  return (
    <>
      <Controller
        name="donor"
        control={control}
        render={({ field }) => (
          <ReactSelect
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
    </>
  );
};

export default Select;
