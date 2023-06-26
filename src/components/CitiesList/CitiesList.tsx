import styled from '@emotion/styled';
import { Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { GECODE_Location } from '../../api/locations';
import { fetchWeatherInfo } from '../../store/weather';
import { setLocation } from '../../store/locations';
import { updateWeatherCityInfo } from '../../store/citiesList';
import { WeatherInfoParsedResponse } from '../../api/weather';

const FlexContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

type CitiesListButtonProps = {
  cityInfo: GECODE_Location;
};

const CitiesListButton: FC<CitiesListButtonProps> = ({ cityInfo }) => {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    dispatch(setLocation(cityInfo));
    dispatch(
      fetchWeatherInfo({
        lat: cityInfo.lat,
        lon: cityInfo.lon,
      })
    ).then(({ payload }) => {
      const weatherInfo = payload as Pick<
        WeatherInfoParsedResponse,
        'nextDays' | 'todayInfo'
      >;
      dispatch(
        updateWeatherCityInfo({
          id: cityInfo.place_id,
          weatherInfo,
        })
      );
    });
  };

  return (
    <Button variant="contained" onClick={onClick} fullWidth>
      <Typography noWrap>{cityInfo.display_name.split(', ')[0]}</Typography>
    </Button>
  );
};

const CitiesList: FC = () => {
  const citiesList = useSelector((state: RootState) => state.citiesList);

  return citiesList.length !== 0 ? (
    <Grid container spacing={2} direction={'row'} alignContent={'center'}>
      {citiesList.map((item) => (
        <Grid key={item.city.place_id} sm={4} item xs={12}>
          <CitiesListButton cityInfo={item.city} />
        </Grid>
      ))}
    </Grid>
  ) : null;
};
export default CitiesList;
