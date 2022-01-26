import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import AuthContext from '../../context/AppContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loggedIn, getLoggedIn, getTheme } = useContext(AuthContext);
  const history = useHistory();

  if (loggedIn) {
    history.push('/');
  }

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password
      };

      await axios.post('/auth/login', loginData);
      await getLoggedIn();
      await getTheme();
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Card sx={{ marginX: 12, mt: 4, pt: 2 }}>
      <Grid container padding={3}>
        <Grid item xs={12} mb={2}>
          <Typography variant="h5" fontWeight={600}>
            Log in to your account
          </Typography>
        </Grid>
        <Grid item xs={12} mb={2}>
          <form onSubmit={login}>
            <Grid item xs={12} mb={2}>
              <TextField
                id="email"
                label="Email"
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} mb={2}>
              <TextField
                id="password"
                label="Password"
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Grid>
            <Button type="submit" variant="contained">
              Log In
            </Button>
          </form>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Login;
