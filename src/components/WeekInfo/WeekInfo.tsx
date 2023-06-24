import { Grid } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import WeekInfoItem from './WeekInfoItem';
import dayjs from 'dayjs';

const WeekInfo: FC = () => {
  const { nextDays } = useSelector((state: RootState) => state.weather);

  return (
    <Grid container spacing={2} justifyContent={'space-between'}>
      {nextDays.map((weatherInfo) => (
        <Grid item md={2} xs={6} key={weatherInfo.time}>
          <WeekInfoItem
            day={dayjs(weatherInfo.time)
              .locale(navigator.language)
              .format('dddd')}
            temperatureMax={weatherInfo.temperature_max}
            temperatureMin={weatherInfo.temperature_min}
            weatherCode={weatherInfo.weatherCode}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default WeekInfo;
