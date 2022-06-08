/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../utils/data';
import { RootState } from './store';

export const themeSlice = createSlice({
  name: 'Theme',
  initialState: { theme: initialState.theme },
  //   initialState,
  reducers: {
    changeTheme: (state, { payload }: PayloadAction<string>) => {
      state.theme = payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const themeSelector = (state: RootState) => state.theme;
export default themeSlice.reducer;
