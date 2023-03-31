import { configureStore } from '@reduxjs/toolkit';
// import usersReducer from '@/components/UsersManager/usersSlice';
export const store = configureStore({
  reducer: {
    //connect reducers
    // users: usersReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
