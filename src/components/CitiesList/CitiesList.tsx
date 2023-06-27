import { Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GECODE_Location } from '../../api/locations';
import { WeatherInfoParsedResponse } from '../../api/weather';
import { AppDispatch, RootState } from '../../store';
import { updateWeatherCityInfo } from '../../store/citiesList';
import { setLocation } from '../../store/locations';
import { fetchWeatherInfo } from '../../store/weather';

type CitiesListButtonProps = {
  cityInfo: GECODE_Location;
};

const CitiesListButton: FC<CitiesListButtonProps> = ({ cityInfo }) => {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    // When click on saved city update selected location
    dispatch(setLocation(cityInfo));
    // Fetch again weather info of location
    dispatch(
      fetchWeatherInfo({
        lat: cityInfo.lat,
        lon: cityInfo.lon,
      })
      // When data fetch update weather info of saved location
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
    <Grid
      container
      spacing={2}
      direction={'row'}
      alignContent={'center'}
      data-testid="cities-list"
    >
      {citiesList.map((item) => (
        <Grid key={item.city.place_id} sm={4} item xs={12}>
          <CitiesListButton cityInfo={item.city} />
        </Grid>
      ))}
    </Grid>
  ) : null;
};
export default CitiesList;
