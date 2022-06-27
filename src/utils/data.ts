import { Role } from './constants';
import { IUser } from './interfaces';

const anonymusUser: IUser = {
  id: -1,
  name: 'Anonymus',
  role: Role.GUEST,
  email: '',
  password: '',
};

const initialState = {
  user: anonymusUser,
  theme: 'light',
  token: '',
};

const sideBarData = [
  { name: 'Home', href: '/', role: Role.GUEST },
  { name: 'Dashboard', href: '', role: Role.EDITOR },
  { name: 'Beneficiaries', href: '/beneficiaries', role: Role.ADMIN },
  { name: 'Donors', href: '/donors', role: Role.ADMIN },
  { name: 'Donations', href: '/donations', role: Role.SUPER },
  { name: 'Expenses', href: '/expenses', role: Role.ADMIN },
  { name: 'Users', href: '/users', role: Role.SUPER },
];

export { initialState, sideBarData };
