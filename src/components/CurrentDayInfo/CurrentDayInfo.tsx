import { Divider, Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  OP_WMO_CODES,
  weatherCodes,
} from '../common/WeatherCodes/WeatherCodes';
import DaySecondaryInfo from './DaySecondaryInfo';

/*
Entradas esperadas por la store de Redux
    Ciudad,
    País,
    Fecha,
    Tiempo: wheathercode
    Temeperatura

    Segundo Bloque:
    Temperatura maxima, minima y la que se quiera añadir
    Probabilidad de precipitación
*/

const CurrentDayInfo: FC = () => {
  const { selectedLocation } = useSelector(
    (state: RootState) => state.locations
  );
  const { todayInfo } = useSelector((state: RootState) => state.weather);

  const day = dayjs(new Date()).locale('es').format('dddd D MMMM');

  const weatherCode = todayInfo?.weatherCode || OP_WMO_CODES[0];
  const WeatherIcon = weatherCodes[weatherCode].iconCode;
  return (
    <Grid container spacing={2}>
      {/* Titulo que muestra la ciudad y el pais  */}
      <Grid item xs={12}>
        <Typography variant="h4">
          {selectedLocation?.display_name || '-'}
        </Typography>
        <Typography variant="h6" color="greenyellow">
          {day}
        </Typography>
      </Grid>

      <Grid
        item
        md={5}
        xs={12}
        container
        justifyContent="center"
        alignItems={'center'}
      >
        <Grid item>
          <WeatherIcon size={150} />
        </Grid>
        <Grid item>
          <Typography variant="h2">{todayInfo?.temperature || '-'}</Typography>
          <Typography variant="body2">
            {weatherCodes[weatherCode].name}
          </Typography>
        </Grid>
      </Grid>
      <Divider orientation="vertical" flexItem color="white" />
      <Grid item md={6} xs={12}>
        <DaySecondaryInfo />
      </Grid>
    </Grid>
  );
};

export default CurrentDayInfo;
