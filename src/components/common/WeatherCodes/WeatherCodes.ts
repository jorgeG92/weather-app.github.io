import {
  WiDayCloudy,
  WiDayCloudyHigh,
  WiDayFog,
  WiDayRainMix,
  WiDaySleet,
  WiDaySleetStorm,
  WiDaySunny,
  WiElement,
  WiFog,
  WiRain,
  WiSleet,
  WiSnow,
  WiSnowflakeCold,
  WiStormShowers,
} from 'weather-icons-react';

/**
 * Weather Codes defined by WMO used by Open Meteo
 */
export const OP_WMO_CODES = [
  0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77,
  80, 81, 82, 85, 86, 95, 96, 99,
] as const;

/**
 * Create a type with the codes include in OP_WMO_CODES.
 */
export type OP_WMO_CODES_TYPE = (typeof OP_WMO_CODES)[number];

type WeatherContent = {
  name: string;
  iconCode: WiElement;
};

/**
 * Handle
 */
export const weatherCodes: Record<OP_WMO_CODES_TYPE, WeatherContent> = {
  0: { name: 'Soleado', iconCode: WiDaySunny },
  1: { name: 'Parcialmente despejado', iconCode: WiDayCloudy },
  2: { name: 'Parcialmente nublado', iconCode: WiDayCloudyHigh },
  3: { name: 'Nublado', iconCode: WiDayFog },
  45: { name: 'Niebla', iconCode: WiFog },
  48: { name: 'Deposito de niebla', iconCode: WiFog },
  51: { name: 'Llovizna ligera', iconCode: WiDayRainMix },
  53: { name: 'Llovizna', iconCode: WiDayRainMix },
  55: { name: 'Llovizna densa', iconCode: WiDayRainMix },
  56: { name: 'Llovizna helada ligera', iconCode: WiSleet },
  57: { name: 'Llovizna helada densa', iconCode: WiSleet },
  61: { name: 'LLuvia ligera', iconCode: WiRain },
  63: { name: 'Lluvia moderada', iconCode: WiRain },
  65: { name: 'Lluvia densa', iconCode: WiRain },
  66: { name: 'Lluvia helada ligera', iconCode: WiDaySleetStorm },
  67: { name: 'Lluvia helada densa', iconCode: WiSleet },
  71: { name: 'Nevada ligera', iconCode: WiSnow },
  73: { name: 'Nevada', iconCode: WiSnow },
  75: { name: 'Nevada densa', iconCode: WiSnow },
  77: { name: 'Copos de nieve', iconCode: WiSnowflakeCold },
  80: { name: 'Chubascos ligeros', iconCode: WiDaySleet },
  81: { name: 'Chubascos', iconCode: WiDaySleet },
  82: { name: 'Chubascos violentos', iconCode: WiDaySleet },
  85: { name: 'Nevada ligera', iconCode: WiSnow }, // Nevada
  86: { name: 'Nevada densa', iconCode: WiSnow }, // Nevada
  95: { name: 'Tormenta', iconCode: WiStormShowers },
  96: { name: 'Tormenta eléctrica', iconCode: WiStormShowers },
  99: { name: 'Tormenta eléctrica', iconCode: WiStormShowers },
};

export default { OP_WMO_CODES, weatherCodes };
