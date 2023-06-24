import React from 'react';
import MainContainer from './components/MainContainer';
import { ThemeProvider, styled } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store';
import theme from './theme';

const AppContainer = styled('div')({
  height: '100%',
  background: 'linear-gradient(180deg, blueviolet 0%, blue 6%, lightblue 100%)',
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          {/* Añadido para poder utilizar los iconos de Google Material en el componete de MUI Icon */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <MainContainer />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
