import React from 'react';
import MainContainer from './components/MainContainer/MainContainer';
import { styled } from '@mui/material';

const AppContainer = styled('div')({
  height: '100%',
  background: 'linear-gradient(180deg, blueviolet 0%, blue 6%, lightblue 100%)',
});

function App() {
  return (
    <AppContainer>
      <MainContainer />
    </AppContainer>
  );
}

export default App;
