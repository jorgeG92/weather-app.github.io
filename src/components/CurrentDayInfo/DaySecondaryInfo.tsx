import styled from '@emotion/styled';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import dayjs from 'dayjs';

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
const DaySecondaryInfo: FC = () => {
  const { todayInfo } = useSelector((state: RootState) => state.weather);

  return (
    <>
      <FlexContainer>
        <InfoBox
          data="Máxima"
          value={`${todayInfo?.temperature_max || '-'}º`}
        />
        <InfoBox
          data="Lluvia"
          value={`${todayInfo?.precipitationProb || '-'}%`}
        />
        <InfoBox
          data="Amanece"
          value={`${
            todayInfo?.sunrise ? dayjs(todayInfo.sunrise).format('HH:MM') : '-'
          }`}
        />
      </FlexContainer>
      <FlexContainer>
        <InfoBox
          data="Mínima"
          value={`${todayInfo?.temperature_min || '-'}º`}
        />
        <InfoBox
          data="Humedad"
          value={`${todayInfo?.relativeHumidity || '-'}%`}
        />
        <InfoBox
          data="Anochece"
          value={`${
            todayInfo?.sunset ? dayjs(todayInfo.sunset).format('HH:MM') : '-'
          }`}
        />
      </FlexContainer>
    </>
  );
};

export default DaySecondaryInfo;
