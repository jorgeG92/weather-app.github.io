import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import locations from '../store/locations';
import weather from '../store/weather';
import citiesList from '../store/citiesList';

// Key used in localStorage
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
const loadFromLocalStorage = (): PreloadedState<RootState> => {
  try {
    const localState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localState === null) return {};
    return JSON.parse(localState);
  } catch (error) {
    console.warn(error);
    return {};
  }
};

const rootReducer = combineReducers({
  locations,
  weather,
  citiesList,
});

export const setupStore = (preloadedState: PreloadedState<RootState>) => {
  const createdStore = configureStore({ reducer: rootReducer, preloadedState });
  return createdStore;
};

// Create store for the app an subscribe each change to localStorage
const store = setupStore(loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
