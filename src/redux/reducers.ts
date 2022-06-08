/* eslint-disable import/no-cycle */
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import themeReducer from './themeSlice';

// auth is the state piece name
const rootReducer = combineReducers({ auth: authReducer, theme: themeReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
