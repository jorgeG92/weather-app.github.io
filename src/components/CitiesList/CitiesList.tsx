import styled from '@emotion/styled';
import { Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';

const FlexContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const CitiesList: FC = () => (
  <FlexContainer>
    <Typography variant="h5" sx={{ marginBottom: 1 }}>
      Ubicaciones guardadas
    </Typography>
    <Grid container spacing={2} direction={'row'} justifyContent={'center'}>
      <Grid item sm={4} xs={12}>
        <Button fullWidth variant="contained">
          Ciudad 1
        </Button>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Button fullWidth variant="contained">
          Ciudad 1
        </Button>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Button fullWidth variant="contained">
          Ciudad 1
        </Button>
      </Grid>
    </Grid>
  </FlexContainer>
);
export default CitiesList;
