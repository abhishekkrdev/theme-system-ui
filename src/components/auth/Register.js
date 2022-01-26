import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import AuthContext from '../../context/AppContext';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');

  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  if (loggedIn) {
    history.push('/');
  }

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify
      };

      // Basic Validation is added on server side , though we should add validation and handle form using library such as Formik and Yup
      await axios.post('/auth/', registerData);
      await getLoggedIn();
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
            Register a new account
          </Typography>
        </Grid>
        <Grid item xs={12} mb={2}>
          <form onSubmit={register}>
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
            <Grid item xs={12} mb={2}>
              <TextField
                id="passwordVerify"
                label="Verify Password"
                name="passwordVerify"
                placeholder="Password Verify"
                type="password"
                value={passwordVerify}
                onChange={(e) => setPasswordVerify(e.target.value)}
                fullWidth
              />
            </Grid>
            <Button type="submit" variant="contained">
              Register
            </Button>
          </form>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Register;
