import dayjs from 'dayjs';
import { NexDayInfo } from '../../../api/weather';
import { TestStore, renderWithRedux } from '../../../test.utils';
import WeekInfo from '../WeekInfo';

const tuesdayDateTime = new Date('2023-06-27').getTime();
const nextDay: NexDayInfo = {
  time: tuesdayDateTime,
  weatherCode: 0,
  temperature_max: 20,
  temperature_min: 10,
};

const buildedStore: TestStore = {
  weather: {
    nextDays: [nextDay],
  },
};

describe('WeekInfo unitary test', () => {
  it('should not render any child', () => {
    const {
      render: { getByTestId },
    } = renderWithRedux(<WeekInfo />, {});
    const weekInfoContainer = getByTestId('week-info');

    // Expect that container exist without children
    expect(weekInfoContainer).toBeInTheDocument();
    expect(weekInfoContainer.children).toHaveLength(0);
  });
  it('should render properly day info', () => {
    const {
      render: { getByTestId, getByText },
    } = renderWithRedux(<WeekInfo />, buildedStore);
    const weekInfoContainer = getByTestId('week-info');

    // Expect that container exist without children
    expect(weekInfoContainer.children).toHaveLength(1);
    // Check if exist day date
    expect(
      getByText(dayjs(tuesdayDateTime).format('dddd'))
    ).toBeInTheDocument();
    // Check if exist min temperature
    expect(getByText(`${nextDay.temperature_min}º`)).toBeInTheDocument();
    // Check if exist max temperature
    expect(getByText(`${nextDay.temperature_max}º`)).toBeInTheDocument();
  });
});
