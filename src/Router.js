import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';

import AppContext from './context/AppContext';

function Router() {
  const { loggedIn } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
