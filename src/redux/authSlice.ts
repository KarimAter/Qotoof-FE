/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../utils/data';
import { IUser } from '../utils/interfaces';
import { RootState } from './store';

export const authSlice = createSlice({
  name: 'authenticate',
  // initialState,
  initialState: { user: initialState.user, token: initialState.token },
  reducers: {
    login: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    logout: (state, { payload }: PayloadAction<string>) => {
      state.user = initialState.user;
      state.token = '';
    },

    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
  },
});
export const { login, logout, setToken } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

// export const authSelector = (state: RootState) => {
//   console.log(state);
//   return state.auth;
// };


export default authSlice.reducer;
