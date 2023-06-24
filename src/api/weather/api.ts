import axios, { AxiosResponse } from 'axios';
import { GECODE_Location } from '../locations';

import { OP_WMO_CODES_TYPE } from '../../components/common/WeatherCodes';

type CommonResponse = {
  time: number[];
  weathercode: OP_WMO_CODES_TYPE[];
};

type HourlyResponse = CommonResponse & {
  temperature_2m: number[];
  relativehumidity_2m: number[];
  precipitation_probability: number[];
};

type DailyResponse = CommonResponse & {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunset: number[];
  sunrise: number[];
};

type TodayInfo = {
  weatherCode: OP_WMO_CODES_TYPE;
  temperature: number;
  temperature_max: number; // From daily
  temperature_min: number; // From daily
  precipitationProb: number;
  relativeHumidity: number;
  sunset: number; // From daily
  sunrise: number; // From daily
};

type NexDayInfo = Pick<
  TodayInfo,
  'weatherCode' | 'temperature_max' | 'temperature_min'
> & {
  time: number;
};

const parseTodayInfo = (
  hourly: HourlyResponse,
  daily: DailyResponse
): TodayInfo => ({
  weatherCode: hourly.weathercode[0],
  temperature: hourly.temperature_2m[0],
  precipitationProb: hourly.precipitation_probability[0],
  relativeHumidity: hourly.relativehumidity_2m[0],
  temperature_max: daily.temperature_2m_max[0],
  temperature_min: daily.temperature_2m_min[0],
  sunrise: daily.sunrise[0],
  sunset: daily.sunset[0],
});

const parseNextDayInfo = (daily: DailyResponse): NexDayInfo[] =>
  // Suponiendo que no devuelve mas de 7 dias cogemos los 6 ultimos
  daily.time.slice(1).map((t, index) => ({
    time: t,
    temperature_max: daily.temperature_2m_max[index],
    temperature_min: daily.temperature_2m_min[index],
    weatherCode: daily.weathercode[index],
  }));

type WeatherInfoResponse = {
  hourly: HourlyResponse;
  daily: DailyResponse;
};

export type WeatherInfoParsedResponse = {
  todayInfo: TodayInfo;
  nextDays: NexDayInfo[];
};

const weatherApi = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/forecast?',
});

const getWeatherInfo = async ({
  lat,
  lon,
}: Pick<
  GECODE_Location,
  'lat' | 'lon'
>): Promise<WeatherInfoParsedResponse> => {
  try {
    const response = await weatherApi.request<
      any,
      AxiosResponse<WeatherInfoResponse>
    >({
      params: {
        latitude: lat,
        longitude: lon,
        hourly:
          'temperature_2m,relativehumidity_2m,precipitation_probability,weathercode',
        daily:
          'temperature_2m_max,temperature_2m_min,sunrise,sunset,weathercode',
        timezone: 'Europe/Madrid', // TODO Estaria bien que lo cogiera del navegador
        timeformat: 'iso8601',
        forecast_days: 7,
      },
    });

    const { hourly, daily } = response.data;

    return {
      todayInfo: parseTodayInfo(hourly, daily),
      nextDays: parseNextDayInfo(daily),
    };
  } catch (error) {
    throw error;
  }
};

export { getWeatherInfo };
