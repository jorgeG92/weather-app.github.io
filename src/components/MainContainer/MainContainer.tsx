import styled from '@emotion/styled';
import { Divider } from '@mui/material';
import { FC } from 'react';
import CurrentDayInfo from '../CurrentDayInfo';
import TopBar from '../TopBar/TopBar';
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
    <TopBar />
    <Container>
      <CurrentDayInfo />
      <Divider flexItem color="white" sx={{ marginY: 5 }} />
      <WeekInfo />
    </Container>
  </>
);
export default MainContainer;
