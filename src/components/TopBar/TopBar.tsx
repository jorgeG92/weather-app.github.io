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

const JustifyToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const AutocompleteContainer = styled.div({
  flexGrow: 1,
  maxWidth: 500,
  minWidth: 50,
  backgroundColor: 'white',
  borderRadius: 5,
});

const TopBar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading: loadingLocations, locations } = useSelector(
    (state: RootState) => state.locations
  );
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
    dispatch(fetchLocations(value));
    setInputValue(value);
  };

  return (
    <AppBar position="relative">
      <JustifyToolbar>
        <Typography variant="h5" noWrap>
          Weather App
        </Typography>
        <AutocompleteContainer>
          <Autocomplete
            size="small"
            loading={loadingLocations}
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
              <TextField {...params} placeholder="Buscar ciudad" />
            )}
            // Disabled native filtering of component suggested by MUI -> https://mui.com/material-ui/react-autocomplete/#search-as-you-type
            filterOptions={(x) => x}
          />
        </AutocompleteContainer>
      </JustifyToolbar>
      {loadingWeatherInfo && <LinearProgress />}
    </AppBar>
  );
};

export default TopBar;
