import React from 'react';
import MainContainer from './components/MainContainer';
import { styled } from '@mui/material';

const AppContainer = styled('div')({
  height: '100%',
  background: 'linear-gradient(180deg, blueviolet 0%, blue 6%, lightblue 100%)',
});

function App() {
  return (
    <AppContainer>
      {/* Añadido para poder utilizar los iconos de Google Material en el componete de MUI Icon */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <MainContainer />
    </AppContainer>
  );
}

export default App;
