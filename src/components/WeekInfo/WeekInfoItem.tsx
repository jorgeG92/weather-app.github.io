import styled from '@emotion/styled';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { weatherCodes } from '../common/WeatherCodes';

const WeekInfoBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: 5,
  padding: 10,
});

const WeekBoxTempContainer = styled('div')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const WeekInfoItem: FC = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

  const weatherCode = 0;
  const WeatherIcon = weatherCodes[weatherCode].iconCode;

  return (
    <WeekInfoBox>
      <Typography>Dia X</Typography>
      <WeatherIcon size={isPhone ? 45 : 100} />
      <WeekBoxTempContainer>
        {/* Max */}
        <Typography color="red" variant="body1" marginRight={2}>
          20º
        </Typography>
        {/* Min */}
        <Typography color="blue" variant="body1">
          10º
        </Typography>
      </WeekBoxTempContainer>
    </WeekInfoBox>
  );
};

export default WeekInfoItem;
