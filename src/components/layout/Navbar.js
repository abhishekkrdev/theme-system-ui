import React, { useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import AppContext from '../../context/AppContext';
import LogOutBtn from '../auth/LogOutBtn';

const themeNames = ['light', 'dark', 'green'];

function Navbar() {
  const { loggedIn, changeTheme } = useContext(AppContext);
  const history = useHistory();

  const changeThemeForUser = async (themeName) => {
    try {
      await axios.put('/auth/theme', { themeName });
    } catch (err) {
      console.error('Problem occured while changing theme for user');
    }
  };

  const handleThemeChange = (closePopup, themeNameSelected) => {
    closePopup();
    changeTheme(themeNameSelected);
    changeThemeForUser(themeNameSelected);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Theme Selector
          </Typography>
          {!loggedIn && (
            <Fragment>
              <Button color="inherit" onClick={() => history.push('/login')}>
                Login
              </Button>
              <Button color="inherit" onClick={() => history.push('/register')}>
                Register
              </Button>
            </Fragment>
          )}
          {loggedIn && (
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="standard" {...bindTrigger(popupState)}>
                    Choose Theme
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    {themeNames.map((themeName) => {
                      return (
                        <MenuItem
                          key={themeName}
                          onClick={() => handleThemeChange(popupState.close, themeName)}
                        >
                          {themeName && themeName[0].toUpperCase() + themeName.slice(1)}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          )}
          {loggedIn && <LogOutBtn />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
