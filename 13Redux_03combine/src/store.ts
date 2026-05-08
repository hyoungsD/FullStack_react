import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterslice';
import userReducer from './userslice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

