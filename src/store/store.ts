import { configureStore } from '@reduxjs/toolkit';
import locations from '../store/locations';
import weather from '../store/weather';
import citiesList from '../store/citiesList';

const LOCAL_STORAGE_KEY = 'reduxState';

// Save redux state in localStorage as JSON object
const saveToLocalStorage = (state: RootState): void => {
  try {
    const stateToJSON = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, stateToJSON);
  } catch (error) {
    console.warn(error);
  }
};

// Load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const localState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localState === null) return undefined;
    return JSON.parse(localState);
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    locations,
    weather,
    citiesList,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
