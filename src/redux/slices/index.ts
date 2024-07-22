import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import detailsReducer from './detailsSlice';

export const rootReducer = combineReducers({
  data: dataReducer,
  details: detailsReducer,
});
