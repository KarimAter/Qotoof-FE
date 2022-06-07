import { Role } from './constants';

const initialState = {
  user: {},
  theme: '',
};

const sideBarData = [
  { name: 'Home', href: '/', role: Role.GUEST },
  { name: 'Dashboard', href: '', role: Role.EDITOR },
  { name: 'Beneficiaries', href: '/beneficiaries', role: Role.ADMIN },
  { name: 'Donors', href: '/donors', role: Role.ADMIN },
  { name: 'Donations', href: '/donations', role: Role.SUPER },
  { name: 'Expenses', href: '/expenses', role: Role.ADMIN },
  { name: 'Users', href: '/users', role: Role.GUEST },
];

export { initialState, sideBarData };
