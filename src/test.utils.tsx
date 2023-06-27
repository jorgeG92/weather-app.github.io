import { DeepPartial, PreloadedState } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { RootState, setupStore } from './store';
import { initialState as citiesListIState } from './store/citiesList';
import { initialState as locationsIState } from './store/locations';
import { initialState as weatherIState } from './store/weather';

export type TestStore = DeepPartial<RootState>;

const renderWithRedux = (ui: ReactElement, partialState: TestStore) => {
  const preloadedState = {
    citiesList: partialState?.citiesList || citiesListIState,
    locations: {
      ...locationsIState,
      ...partialState.locations,
    },
    weather: {
      ...weatherIState,
      ...partialState.weather,
    },
  } as PreloadedState<RootState>;

  const testStore = setupStore(preloadedState);
  const ReduxWrapper = ({ children }: PropsWithChildren<{}>): ReactElement => (
    <Provider store={testStore}>{children}</Provider>
  );
  return render(ui, { wrapper: ReduxWrapper });
};

export { renderWithRedux };
