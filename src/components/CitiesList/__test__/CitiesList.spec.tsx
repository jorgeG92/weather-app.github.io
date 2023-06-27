import { act, waitFor } from '@testing-library/react';
import { TestStore, renderWithRedux } from '../../../test.utils';
import CitiesList from '../CitiesList';
import userEvent from '@testing-library/user-event';
import * as ReactRedux from 'react-redux';

const madridCity = {
  display_name: 'Madrid, España',
  lat: 50,
  lon: 50,
  place_id: 1,
};
const store: TestStore = {
  citiesList: [
    {
      city: madridCity,
      weatherInfo: { nextDays: [], todayInfo: {} },
    },
    {
      city: { display_name: 'Berlin, Alemania', lat: 40, lon: 40, place_id: 2 },
      weatherInfo: { nextDays: [], todayInfo: {} },
    },
  ],
};

describe('CitiesList unitary test', () => {
  it('should not be rendered if dont exist cities selected', () => {
    // Render without cities on redux store
    const {
      render: { queryByTestId },
    } = renderWithRedux(<CitiesList />, {});
    expect(queryByTestId('cities-list')).not.toBeInTheDocument();
  });
  it('should render a list of buttons', () => {
    const {
      render: { getAllByRole },
    } = renderWithRedux(<CitiesList />, store);

    const button = getAllByRole('button');
    // First button is Madrid and second Berlin
    expect(button[0]).toHaveTextContent('Madrid');
    expect(button[1]).toHaveTextContent('Berlin');
  });
  it('should call dispatch actions', async () => {
    const {
      store: testStore,
      render: { getAllByRole },
    } = renderWithRedux(<CitiesList />, store);

    const button = getAllByRole('button');
    // First button is Madrid and second Berlin

    expect(button[0]).toHaveTextContent('Madrid');

    // Disable this eslint warning because test doesn't change DOM
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      userEvent.click(button[0]);
    });

    // Selected city of list (Madrid) should be now selected location
    expect(testStore.getState().locations.selectedLocation).toEqual(madridCity);
  });
});
