import { PreloadedState } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { RootState, setupStore } from './store';

export type TestStore = PreloadedState<RootState>;

const renderWithRedux = (ui: ReactElement, preloadedState: TestStore) => {
  const testStore = setupStore(preloadedState);
  const ReduxWrapper = ({ children }: PropsWithChildren<{}>): ReactElement => (
    <Provider store={testStore}>{children}</Provider>
  );
  return render(ui, { wrapper: ReduxWrapper });
};

export { renderWithRedux };
