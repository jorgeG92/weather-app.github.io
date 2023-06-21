import { FC } from 'react';
import styled from '@emotion/styled';
import CurrentDayInfo from '../CurrentDayInfo';
import WeeKInfo from '../WeekInfo/WeekInfo';

const Container = styled('div')({
  padding: 50,
});

const MainContainer: FC = () => (
  <Container>
    <CurrentDayInfo />
    <WeeKInfo />
  </Container>
);
export default MainContainer;
