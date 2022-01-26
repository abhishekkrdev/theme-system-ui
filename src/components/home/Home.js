import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import AppContext from '../../context/AppContext';

const Home = () => {
  const history = useHistory();
  const { loggedIn, theme } = useContext(AppContext);

  if (!loggedIn) {
    history.push('/login');
  }

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh'
      }}
    >
      <Typography color={'primary'} variant="h4">
        Welcome to theme selector.
      </Typography>

      <Typography color={'primary'} variant="h5">
        Find the option of Choose Theme in Navbar to select the different theme
      </Typography>
    </Box>
  );
};

export default Home;
