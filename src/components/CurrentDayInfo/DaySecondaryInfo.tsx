import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';

const FlexContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const FlexItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
});

const InfoBox: FC<{
  value: string;
  data: string;
}> = ({ value, data }) => {
  const theme = useTheme();

  // Se utilizan para capturar el tamaño de la pantalla
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

  // Dependiendo del tamaño de la pantalla se utilizan una variante u otra
  // de la información dispuesta, pues no se pretende que la bloques
  // de la aplicación hagan un wrap o se sobrepongan unos a otros.
  const variantValue = isPhone ? 'h5' : isTablet ? 'h3' : 'h2';
  const variantData = isPhone ? 'caption' : 'body2';

  return (
    <FlexItem>
      <Typography variant={variantValue}>{value}</Typography>
      <Typography variant={variantData} color="greenyellow">
        {data}
      </Typography>
    </FlexItem>
  );
};

const DaySecondaryInfo: FC = () => (
  <>
    <FlexContainer>
      {/* Máximo del dia temperature_2m_max Daily */}
      <InfoBox data="Máxima" value="30º" />
      {/* Probabilidad de precipitación: precipitation_probability hourly */}
      <InfoBox data="Lluvia" value="50%" />
      {/* Amananece surise daily */}
      <InfoBox data="Amanece" value="15:30" />
    </FlexContainer>
    <FlexContainer>
      {/* Mínimo del dia del dia temperature_2m_max Daily */}
      <InfoBox data="Mínima" value="15º" />
      {/* Humedad relativa relativehumidity_2m hourly */}
      <InfoBox data="Humedad" value="30%" />
      {/* Anochece sunset daily */}
      <InfoBox data="Anochece" value="15:30" />
    </FlexContainer>
  </>
);

export default DaySecondaryInfo;
