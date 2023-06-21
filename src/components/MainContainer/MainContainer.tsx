import { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled('div')({
  padding: 20,
});

const MainContainer: FC = () => (
  <Container>
    <div>CurrentDayInfo</div>
    <div>DayInfo</div>
  </Container>
);
export default MainContainer;
