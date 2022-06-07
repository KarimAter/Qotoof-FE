import { Role } from "./constants";

export interface IUser {
  id: number;
  name: string;
  email?: string;
  password?: string;
  role: Role;
}
export interface IDonor {
  id: number;
  name: string;
  referral: IUser;
}
export interface IDonation {
  id: number;
  date: string;
  amount: number;
  category: string;
  status?: string;
  payment?: string;
  comment?: string;
  donor: IDonor;
}

export interface IBeneficiary {
  id: number;
  name: string;
}
export interface IExpense {
  id: number;
  date: string;
  amount: number;
  category: string;
  status: string;
  paymentType: string;
  comment: string;
  project: string;
  user: IUser;
  beneficiary: IBeneficiary;
}
