

import { combineReducers } from '@reduxjs/toolkit';
import reducer from './authSlice';

const rootReducer = combineReducers({ auth: reducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
