import { configureStore } from '@reduxjs/toolkit';
import locations from '../store/locations';
import weather from '../store/weather';
import citiesList from '../store/citiesList';

const store = configureStore({
  reducer: {
    locations,
    weather,
    citiesList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
