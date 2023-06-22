import { configureStore } from '@reduxjs/toolkit';
import locations from '../store/locations';
import weather from '../store/weather';

const store = configureStore({
  reducer: {
    locations,
    weather,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
