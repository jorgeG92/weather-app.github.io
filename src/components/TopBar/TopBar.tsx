import { FC } from 'react';
import {
  AppBar,
  Autocomplete,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';

const options = ['Paco', 'Juan', 'Rodrigo'];

const FlexToolbar = styled(Toolbar)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const StyledTextField = styled(TextField)({
  backgroundColor: 'lightgray',
  borderRadius: 5,
  minWidth: 200,
});

const TopBar: FC = () => (
  <AppBar position="relative">
    <FlexToolbar>
      <Typography variant="h5">Weather App</Typography>
      <Autocomplete
        size="small"
        options={options}
        renderInput={(params) => (
          <StyledTextField {...params} label="weather" />
        )}
      />
    </FlexToolbar>
  </AppBar>
);

export default TopBar;
