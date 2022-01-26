import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import { ThemeProvider } from '@mui/material/styles';
import { themes } from '../themes/themes';

const AppContext = createContext();

function AppContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(null);
  const [theme, setTheme] = useState('light');

  const getLoggedIn = async () => {
    try {
      const loggedInRes = await axios.get('/auth/loggedIn');
      setLoggedIn(loggedInRes.data);
    } catch (err) {
      console.error('Error while Checking if the user is logged in or not');
    }
  };

  const getTheme = async () => {
    try {
      const themeRes = await axios.get('/auth/theme');
      setTheme(themeRes.data);
    } catch (err) {
      console.error('Error while Getting Theme', err);
    }
  };

  useEffect(() => {
    getLoggedIn();
    getTheme();
  }, []);

  const selectedTheme = themes[theme];

  return (
    <AppContext.Provider value={{ theme, loggedIn, getLoggedIn, changeTheme: setTheme, getTheme }}>
      <ThemeProvider theme={selectedTheme}>{props.children}</ThemeProvider>
    </AppContext.Provider>
  );
}

export default AppContext;
export { AppContextProvider };
