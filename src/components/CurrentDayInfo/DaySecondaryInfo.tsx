import styled from '@emotion/styled';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

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

type InfoBoxProps = {
  value: string;
  data: string;
};

const InfoBox: FC<InfoBoxProps> = ({ value, data }) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FlexItem>
      <Typography variant={isPhone ? 'h4' : 'h2'}>{value}</Typography>
      <Typography variant="body2" color="greenyellow">
        {data}
      </Typography>
    </FlexItem>
  );
};

const DaySecondaryInfo: FC = () => {
  const { todayInfo } = useSelector((state: RootState) => state.weather);

  return todayInfo ? (
    <>
      <FlexContainer data-testid="day-secondary-info">
        <InfoBox data="Máxima" value={`${todayInfo.temperature_max}º`} />
        <InfoBox data="Lluvia" value={`${todayInfo.precipitationProb}%`} />
        <InfoBox
          data="Amanece"
          value={`${dayjs(todayInfo.sunrise).format('HH:MM')}`}
        />
      </FlexContainer>
      <FlexContainer>
        <InfoBox data="Mínima" value={`${todayInfo.temperature_min}º`} />
        <InfoBox data="Humedad" value={`${todayInfo.relativeHumidity}%`} />
        <InfoBox
          data="Anochece"
          value={`${dayjs(todayInfo.sunset).format('HH:MM')}`}
        />
      </FlexContainer>
    </>
  ) : null;
};

export default DaySecondaryInfo;
