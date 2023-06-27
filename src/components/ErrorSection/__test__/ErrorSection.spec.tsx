import { TestStore, renderWithRedux } from '../../../test.utils';
import ErrorSection from '../ErrorSection';

const buildStore = (error: Error | undefined): TestStore => ({
  locations: {
    loading: false,
    selectedLocation: undefined,
    locations: [],
    error,
  },
});

describe('ErrorSection', () => {
  it('component show error message', async () => {
    const testError: Error = { name: 'TestError', message: 'Error en test' };
    const { getByText, getByRole, findByText } = renderWithRedux(
      <ErrorSection />,
      buildStore(testError)
    );

    //  Show error message
    expect(getByRole('alert', { hidden: true })).toBeInTheDocument();
    expect(getByText(testError.message)).toBeInTheDocument();

    // Show countdown properly
    [...new Array(5)].forEach(async (_, index) => {
      await findByText(`La alerta se cerrará en ${5 - index} segundos`);
    });
  });
});
