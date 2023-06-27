import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GECODE_Location } from '../../api/locations';
import { WeatherInfoParsedResponse, getWeatherInfo } from '../../api/weather';

const SLICE_NAME = 'weather' as const;

const fetchWeatherInfo = createAsyncThunk(
  SLICE_NAME + '/fetchWeatherInfo',
  async ({ lat, lon }: Pick<GECODE_Location, 'lat' | 'lon'>) => {
    try {
      const response = await getWeatherInfo({ lat, lon });
      return response;
    } catch (error) {
      throw error;
    }
  }
);

type WeatherState = {
  loading: boolean;
  todayInfo: WeatherInfoParsedResponse['todayInfo'] | undefined;
  nextDays: WeatherInfoParsedResponse['nextDays'];
  error: Error | undefined;
};

const initialState: WeatherState = {
  loading: false,
  todayInfo: undefined,
  nextDays: [],
  error: undefined,
};

const { reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Hourly reducers
    builder.addCase(fetchWeatherInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherInfo.fulfilled, (state, { payload }) => {
      state.loading = false;
      // @ts-ignore
      state.todayInfo = payload.todayInfo;
      // @ts-ignore
      state.nextDays = payload.nextDays;
    });
    builder.addCase(fetchWeatherInfo.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error as Error;
    });
  },
});

export { fetchWeatherInfo, initialState };
export default reducer;
