import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import CurrentDayInfo from '../CurrentDayInfo';
import WeekInfo from '../WeekInfo/WeekInfo';

const Container = styled('div')({
  padding: 50,
  margin: '0 auto',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const MainContainer: FC = () => (
  <>
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h5">Weather App</Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <CurrentDayInfo />
      <WeekInfo />
    </Container>
  </>
);
export default MainContainer;
