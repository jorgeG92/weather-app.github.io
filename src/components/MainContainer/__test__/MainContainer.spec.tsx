import { waitFor } from '@testing-library/react';
import { GECODE_Location } from '../../../api/locations';
import { renderWithRedux } from '../../../test.utils';
import { act } from '@testing-library/react';
import MainContainer from '../MainContainer';
import userEvent from '@testing-library/user-event';

const selectedLocation: GECODE_Location = {
  place_id: 287464756,
  lat: 40.4167047,
  lon: -3.7035825,
  display_name:
    'Madrid, Área metropolitana de Madrid y Corredor del Henares, Comunidad de Madrid, 28001, España',
};

describe('MainContainer', () => {
  test('should not render any info', async () => {
    const {
      render: { queryByText, queryByTestId },
    } = renderWithRedux(<MainContainer />, {});

    expect(queryByText(selectedLocation.display_name)).not.toBeInTheDocument();
    expect(queryByTestId('current-day')).not.toBeInTheDocument();
    expect(queryByTestId('day-secondary-info')).not.toBeInTheDocument();
  });
  test('should render info about weather', async () => {
    const {
      render: { getByText, getByTestId, getByRole },
    } = renderWithRedux(<MainContainer />, {
      locations: { selectedLocation },
    });

    await waitFor(() => {
      expect(getByText(selectedLocation.display_name)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByTestId('current-day')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByTestId('day-secondary-info')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(getByRole('button')).toBeInTheDocument();
    });
  });
  test('should add to favorite locations', async () => {
    const {
      render: { getByRole },
    } = renderWithRedux(<MainContainer />, {
      locations: { selectedLocation },
    });

    await waitFor(() => {
      expect(getByRole('button')).toBeInTheDocument();
    });

    // Disable this eslint warning because test doesn't change DOM
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      userEvent.click(getByRole('button', { name: 'Añadir ciudad' }));
    });

    // If user click "Añadir ciudad", the button has change to "Eliminar ciudad"
    await waitFor(() => {
      expect(
        getByRole('button', { name: 'Eliminar ciudad' })
      ).toBeInTheDocument();
    });
    // And another button with the name of the location saved "Madrid"
    await waitFor(() => {
      expect(getByRole('button', { name: 'Madrid' })).toBeInTheDocument();
    });
  });
});
