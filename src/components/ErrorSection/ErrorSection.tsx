import { Alert, AlertTitle, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ErrorSection: FC = () => {
  const errorLocations = useSelector(
    (state: RootState) => state.locations.error
  );
  const errorWeather = useSelector((state: RootState) => state.weather.error);

  const [countdown, setCountdown] = useState(0);
  const [showError, setShowError] = useState(false);

  console.log('activo mensaje de error', errorLocations, errorWeather);
  useEffect(() => {
    if (errorLocations || errorWeather) {
      setCountdown(5);
      setShowError(true);
    }
  }, [errorLocations, errorWeather]);

  useEffect(() => {
    if (countdown > 0) setTimeout(() => setCountdown(countdown - 1), 1000);
    else setShowError(false);
  }, [countdown]);

  return (
    <Alert
      severity="error"
      sx={{ marginBottom: 1, display: showError ? '' : 'none' }}
    >
      <AlertTitle>Error</AlertTitle>
      <Typography variant="body2">
        {errorWeather?.message}
        {errorLocations?.message}
      </Typography>
      <Typography variant="caption">
        La alerta se cerrará en {countdown} segundos
      </Typography>
    </Alert>
  );
};

export default ErrorSection;
