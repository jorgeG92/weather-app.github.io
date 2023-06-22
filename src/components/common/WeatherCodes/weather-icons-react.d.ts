/**
 * This file was created avoid TS problem, from use a JS npm package
 * without @types definition in TS file, using "declare module 'weather-icons-react'".
 * Besides gives types to Icon components contained  in 'weather-icons-react'
 */
declare module 'weather-icons-react' {
  type WiElement = import('react').FC<{ size: number }>;
  const WiDaySunny: WiElement;
  const WiDayCloudy: WiElement;
  const WiDayCloudyHigh: WiElement;
  const WiDayFog: WiElement;
  const WiFog: WiElement;
  const WiDayRainMix: WiElement;
  const WiSleet: WiElement;
  const WiRain: WiElement;
  const WiDaySleetStorm: WiElement;
  const WiSnow: WiElement;
  const WiSnowflakeCold: WiElement;
  const WiDaySleet: WiElement;
  const WiStormShowers: WiElement;
}
