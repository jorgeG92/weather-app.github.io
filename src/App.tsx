import React from 'react';
import MainContainer from './components/MainContainer';
import { styled } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store';

const AppContainer = styled('div')({
  height: '100%',
  background: 'linear-gradient(180deg, blueviolet 0%, blue 6%, lightblue 100%)',
});

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        {/* Añadido para poder utilizar los iconos de Google Material en el componete de MUI Icon */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <MainContainer />
      </AppContainer>
    </Provider>
  );
}

export default App;
