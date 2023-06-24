import { AppBar, LinearProgress, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import TopAutocomplete from './TopAutocomplete';

const TopBar: FC = () => {
  const { loading: loadingWeatherInfo } = useSelector(
    (state: RootState) => state.weather
  );

  return (
    <AppBar position="relative">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" noWrap sx={{ marginRight: 10 }}>
          Weather App
        </Typography>
        <TopAutocomplete />
      </Toolbar>
      {loadingWeatherInfo && <LinearProgress />}
    </AppBar>
  );
};

export default TopBar;
