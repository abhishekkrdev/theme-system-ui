import React from 'react';
import Router from './Router';
import axios from 'axios';
import { AppContextProvider } from './context/AppContext';
import CssBaseLine from '@mui/material/CssBaseline';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://theme-mern-system.herokuapp.com';

function App() {
  return (
    <AppContextProvider>
      <CssBaseLine />
      <Router />
    </AppContextProvider>
  );
}

export default App;
