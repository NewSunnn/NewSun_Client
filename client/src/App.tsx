// import { useState } from 'react'
import Router from './Router';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
