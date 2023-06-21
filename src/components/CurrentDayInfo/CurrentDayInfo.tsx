import styled from '@emotion/styled';
import { Box, Divider, Grid, Icon, Typography } from '@mui/material';
import { FC } from 'react';
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

const IconStyled = styled(Icon)({
  fontSize: '75px',
});

const CurrentDayInfo: FC = () => (
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
      md={6}
      xs={12}
      container
      justifyContent="center"
      alignItems={'center'}
    >
      <Grid item>
        <IconStyled style={{ fontSize: 90 }}>
          {/* weather_code hourly */}
          add_circle
        </IconStyled>
      </Grid>
      <Grid item>
        <Typography variant="h2"> 21º {/*temperature_2m hourly*/}</Typography>
        <Typography variant="body2">Soleado</Typography>
      </Grid>
    </Grid>
    <Grid item md={6} xs={12}>
      <DaySecondaryInfo />
    </Grid>
  </Grid>
);

export default CurrentDayInfo;
