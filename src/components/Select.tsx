/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import ReactSelect from 'react-select';

type Props = {
  options: string[];
};

const donors: { label: string; value: string }[] = [
  { label: '3amer', value: '3amer' },
  { label: 'Hussein', value: 'Hussein' },
  { label: 'Zizo', value: 'Zizo' },
  { label: 'Diaa', value: 'Diaa' },
];

const Select = ({ options }: Props) => {
  const selections = options.map((o) => ({ label: o, value: o }));
  console.log(selections);
  return <ReactSelect instanceId="unique" options={selections} isClearable />;
};

export default Select;
