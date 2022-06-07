/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../utils/data';
import { IUser } from '../utils/interfaces';
import { RootState } from './store';

export const authSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    logout: (state, { payload }: PayloadAction<string>) => {
      state.user = {};
    },
  },
});
export const { login, logout } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth.user;

export const themeSelector = (state: RootState) => state.auth.theme;

export default authSlice.reducer;
