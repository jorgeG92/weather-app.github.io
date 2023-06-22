import styled from '@emotion/styled';
import {
  AppBar,
  Autocomplete,
  LinearProgress,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GECODE_Location } from '../../api/locations';
import { AppDispatch, RootState } from '../../store';
import { fetchLocations, setLocation } from '../../store/locations';

const FlexToolbar = styled(Toolbar)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const StyledTextField = styled(TextField)({
  width: 400,
  minWidth: 200,
});

const TopBar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { locations } = useSelector((state: RootState) => state.locations);
  const { loading: loadingWeatherInfo } = useSelector(
    (state: RootState) => state.weather
  );

  const [selectedValue, setSelectedValue] = useState<
    GECODE_Location | undefined
  >(undefined);
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeAutoComplete = (_: any, value: GECODE_Location | null) => {
    // Una vez seleccionado buscamos la información del tiempo
    // No hace falta que este controlado tanto en Redux como React
    if (value) {
      setSelectedValue(value);
      dispatch(setLocation(value));
    }
  };

  const onInputChange = (_: any, value: string) => {
    // Sirve para pedir las peticiones a la API de localizaciones
    console.log('Hola! Input ' + value);
    dispatch(fetchLocations(value));
    setInputValue(value);
  };

  return (
    <AppBar position="relative">
      <FlexToolbar>
        <Typography variant="h5">Weather App</Typography>
        <Autocomplete
          size="small"
          options={locations}
          getOptionLabel={(option) => (option ? option.display_name : '')}
          isOptionEqualToValue={(option, value) =>
            option.place_id === value.place_id
          }
          value={selectedValue}
          inputValue={inputValue}
          onChange={onChangeAutoComplete}
          onInputChange={onInputChange}
          renderInput={(params) => (
            <StyledTextField {...params} label="Localización" />
          )}
          // Ver si filterOptions termina siendo necesario
          filterOptions={(x) => x}
        />
      </FlexToolbar>
      {loadingWeatherInfo && <LinearProgress />}
    </AppBar>
  );
};

export default TopBar;
