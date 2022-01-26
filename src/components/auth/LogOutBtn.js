import React, { useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

import AuthContext from '../../context/AppContext';

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get('/auth/logout');
    await getLoggedIn();
    history.push('/');
  }

  return (
    <Button color="inherit" onClick={logOut}>
      Log out
    </Button>
  );
}

export default LogOutBtn;
