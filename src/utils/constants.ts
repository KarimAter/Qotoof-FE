const API_ENDPOINT = 'http://localhost:8000/';
export interface IUser {
  id: number;
  name: string;
  email?: string;
  password?: string;
  role: 'ADMIN' | 'GUEST' | 'SUPER' | 'EDITOR';
}
export interface IDonor {
  donorId: number;
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

export default API_ENDPOINT;