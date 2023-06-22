import styled from '@emotion/styled';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { OP_WMO_CODES_TYPE, weatherCodes } from '../common/WeatherCodes';

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

type WeekInfoItemProps = {
  day?: string;
  temperatureMax: number;
  temperatureMin: number;
  weatherCode: OP_WMO_CODES_TYPE;
};

const WeekInfoItem: FC<WeekInfoItemProps> = ({
  day = 'Dia 1',
  temperatureMax,
  temperatureMin,
  weatherCode,
}) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

  const WeatherIcon = weatherCodes[weatherCode].iconCode;

  return (
    <WeekInfoBox>
      {/* Set first letter to uppercase */}
      <Typography>{`${day[0].toUpperCase()}${day.slice(1)}`}</Typography>
      <WeatherIcon size={isPhone ? 45 : 100} />
      <WeekBoxTempContainer>
        <Typography color="red" variant="body1" marginRight={2}>
          {temperatureMax}º
        </Typography>
        <Typography color="blue" variant="body1">
          {temperatureMin}º
        </Typography>
      </WeekBoxTempContainer>
    </WeekInfoBox>
  );
};

export default WeekInfoItem;
