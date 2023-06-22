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
      return error;
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
    builder.addCase(fetchWeatherInfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherInfo.fulfilled, (state, { payload }) => {
      state.loading = false;
      console.log('payload', payload);
      // state.todayInfo = action.payload.todayInfo;
      // // @ts-ignore
      // state.nextDays = action.payload.nextDays;
    });
    builder.addCase(fetchWeatherInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as Error;
    });
  },
});

export { fetchWeatherInfo };
export default reducer;
