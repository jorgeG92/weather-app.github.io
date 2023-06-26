import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { GECODE_Location } from '../../api/locations';
import { fetchLocations, setLocation } from '../../store/locations';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import styled from '@emotion/styled';

const AutocompleteContainer = styled.div({
  flexGrow: 1,
  maxWidth: 500,
  minWidth: 50,
  backgroundColor: 'white',
  borderRadius: 5,
});

const parseLocationName = (
  locationName: GECODE_Location['display_name']
): string => {
  const placesArray = locationName.split(', ');
  return [placesArray[0], placesArray[1], placesArray.slice(-2)].join(', ');
};

const TopAutocomplete: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading: loadingLocations, locations } = useSelector(
    (state: RootState) => state.locations
  );

  // Keep selected location value, all object
  const [selectedValue, setSelectedValue] = useState<GECODE_Location | null>(
    null
  );

  // Keeps the typed value
  const [inputValue, setInputValue] = useState<string>('');

  // This onChange is called when the user, at least, selects one option
  const onChangeAutoComplete = (
    _: any,
    value: GECODE_Location | string | null
  ) => {
    if (value && typeof value !== 'string') {
      setSelectedValue(value);
      dispatch(setLocation(value));
    }
  };

  // This onChange is called when the user is typing an fetch new options
  const onInputChange = (_: any, value: string) => {
    // Avoid call
    if (!!value) {
      setInputValue(value);
    }
  };

  // Bounce the api request to avoid make request for every word typed from keyboard
  useEffect(() => {
    const gettingLocations = setTimeout(() => {
      dispatch(fetchLocations(inputValue));
    }, 500);
    return () => clearTimeout(gettingLocations);
  }, [dispatch, inputValue]);

  return (
    <AutocompleteContainer>
      <Autocomplete
        size="small"
        // This options is used when locations doesn't fit with default option object of Autocomplete
        freeSolo
        loading={loadingLocations}
        options={locations}
        value={selectedValue}
        inputValue={inputValue}
        onChange={onChangeAutoComplete}
        onInputChange={onInputChange}
        // Set html label for each option
        getOptionLabel={(option) =>
          option && typeof option !== 'string' ? option.display_name : ''
        }
        // Set condition to know if two options are equal
        isOptionEqualToValue={(option, value) =>
          option.place_id === value.place_id
        }
        // Add unique key in HTML DOM an show parsed name option
        renderOption={(props, option) => (
          <li {...props} key={option.place_id}>
            {parseLocationName(option.display_name)}
          </li>
        )}
        // Component used to render on Autocomplete
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Buscar ciudad"
            // Add circular progress when its fetching locations
            InputProps={{
              ...params.InputProps,
              endAdornment: loadingLocations ? (
                <CircularProgress size={20} />
              ) : null,
            }}
          />
        )}
        // Disabled native filtering of component suggested by MUI -> https://mui.com/material-ui/react-autocomplete/#search-as-you-type
        filterOptions={(x) => x}
      />
    </AutocompleteContainer>
  );
};

export default TopAutocomplete;
