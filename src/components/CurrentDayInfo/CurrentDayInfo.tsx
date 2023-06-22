import { Divider, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { weatherCodes } from '../common/WeatherCodes/WeatherCodes';
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
  const weatherCode = 55;
  const WeatherIcon = weatherCodes[weatherCode].iconCode;
  return (
    <Grid container spacing={2}>
      {/* Titulo que muestra la ciudad y el pais  */}
      <Grid item xs={12}>
        <Typography variant="h4">Madrid, España</Typography>
        <Typography variant="h6" color="greenyellow">
          Lunes 28 Abril
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
          <Typography variant="h2"> 21º {/*temperature_2m hourly*/}</Typography>
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
