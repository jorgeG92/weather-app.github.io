import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GECODE_Location } from '../../api/locations';
import { WeatherInfoParsedResponse } from '../../api/weather';

type CityItem = {
  city: GECODE_Location;
  weatherInfo: Pick<WeatherInfoParsedResponse, 'nextDays' | 'todayInfo'>;
};

type CitiesWeatherState = CityItem[];

type UpdateWeatherCityInfoPayload = {
  id: GECODE_Location['place_id'];
  weatherInfo: Pick<WeatherInfoParsedResponse, 'nextDays' | 'todayInfo'>;
};

const initialState: CitiesWeatherState = [];

const {
  actions: { addCity, removeCity, updateWeatherCityInfo },
  reducer,
} = createSlice({
  name: 'citiesList',
  initialState,
  reducers: {
    addCity: (state, { payload }: PayloadAction<CityItem>) => [
      ...state,
      payload,
    ],
    removeCity: (
      state,
      { payload }: PayloadAction<GECODE_Location['place_id']>
    ) => {
      const index = state.findIndex((item) => item.city.place_id === payload);
      state.splice(index, 1);
      return state;
    },
    updateWeatherCityInfo: (
      state,
      { payload }: PayloadAction<UpdateWeatherCityInfoPayload>
    ) => {
      // TODO Se puede hacer sin sacar el estado a una nueva variable por inmutabilidad
      const cities = state;
      const city = state.findIndex((item) => item.city.place_id === payload.id);
      cities[city] = {
        city: cities[city].city,
        weatherInfo: payload.weatherInfo,
      };
      return cities;
    },
  },
});

export { addCity, removeCity, updateWeatherCityInfo };
export default reducer;
