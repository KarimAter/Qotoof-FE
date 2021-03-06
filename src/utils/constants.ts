/* eslint-disable no-shadow */
const API_ENDPOINT = 'http://localhost:8000';

export enum Role {
  'GUEST' = 0,
  'EDITOR' = 1,
  'ADMIN' = 2,
  'SUPER' = 3,
}
export type SelectOption = {
  // value: string;
  name: string;
};
export const DonationCategory: SelectOption[] = [
  { name: 'General' },
  { name: 'Zakat' },
  { name: 'Pharmacy' },
  { name: 'Meat' },
  { name: 'Chicken' },
  { name: 'Fruits' },
  { name: 'Bags' },
  { name: 'Meals' },
  { name: 'Food' },
  { name: 'Clothes' },
  { name: 'Hospital' },
  { name: 'Mosque' },
  { name: 'Loans' },
  { name: 'Housing' },
  { name: 'WaterPipes' },
  { name: 'Marriage' },
  { name: 'Zakat Fitr' },
  { name: 'Temporary Aid' },
  { name: 'Monthly Aid' },
  { name: 'Treatment' },
  { name: 'Projects' },
  { name: 'Other' },

];
export const ExpenseCategory: SelectOption[] = [
  { name: 'Medication' },
  { name: 'Treatment' },
  { name: 'Medical Aid' },
  { name: 'Marriage' },
  { name: 'Projects' },
  { name: 'Meat' },
  { name: 'Adahy' },
  { name: 'Bags' },
  { name: 'Chicken' },
  { name: 'Transportation' },
  { name: 'Housing Project' },
  { name: 'Loans Settling' },
  { name: 'Meals' },
  { name: 'Mosque' },
  { name: 'WaterPipes' },
  { name: 'Zakat Fitr' },
  { name: 'Temporary Aid' },
  { name: 'Monthly Aid' },
  { name: 'Treatment' },
  { name: 'Projects' },
  { name: 'Other' },
];

export default API_ENDPOINT;
