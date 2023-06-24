import styled from '@emotion/styled';
import { AppBar, LinearProgress, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import TopAutocomplete from './TopAutocomplete';

const JustifyToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const TopBar: FC = () => {
  const { loading: loadingWeatherInfo } = useSelector(
    (state: RootState) => state.weather
  );

  return (
    <AppBar position="relative">
      <JustifyToolbar>
        <Typography variant="h5" noWrap>
          Weather App
        </Typography>
        <TopAutocomplete />
      </JustifyToolbar>
      {loadingWeatherInfo && <LinearProgress />}
    </AppBar>
  );
};

export default TopBar;
