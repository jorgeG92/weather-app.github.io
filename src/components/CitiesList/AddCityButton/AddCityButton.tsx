import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { addCity, removeCity } from '../../../store/citiesList';

const AddCityButton: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const selectedLocation = useSelector(
    (state: RootState) => state.locations.selectedLocation
  );
  const citiesList = useSelector((state: RootState) => state.citiesList);
  const { todayInfo, nextDays } = useSelector(
    (state: RootState) => state.weather
  );

  const isFavoriteCity = !!citiesList.find(
    (city) => city.city.place_id === selectedLocation?.place_id
  );

  const onClick: ButtonProps['onChange'] = () => {
    if (selectedLocation) {
      // In case if selected, remove from list
      if (isFavoriteCity) dispatch(removeCity(selectedLocation.place_id));
      // In case if not selected, add to the list
      else {
        if (todayInfo) {
          const city = {
            city: selectedLocation,
            weatherInfo: { nextDays, todayInfo },
          };
          dispatch(addCity(city));
        }
      }
    }
  };

  return (
    <Button
      variant="contained"
      color={isFavoriteCity ? 'warning' : 'success'}
      onClick={onClick}
      disabled={!(selectedLocation && todayInfo)}
    >
      {isFavoriteCity ? 'Eliminar' : 'Añadir'} ciudad
    </Button>
  );
};

export default AddCityButton;
