import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import { isAuthenticated } from './services/auth'; 

import Login from './pages/Login';
import TwoFactorAuthentication from './pages/TwoFactorAuthentication';
import RegistrationOfEstablishments from './pages/RegistrationOfEstablishments';
import InformationRecord from './pages/InformationRecord';
import Crashed from './pages/Crashed';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>
      isAuthenticated() ?
        <Component {...props} />
      :
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }
  />
)

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Login } />
      <Route path='/Crashed' component={ Crashed } />
      
      <PrivateRoute path='/TwoFactorAuthentication' component={ TwoFactorAuthentication } />
      <PrivateRoute path='/RegistrationOfEstablishments' component={ RegistrationOfEstablishments } />
      <PrivateRoute path='/InformationRecord' component={ InformationRecord } />
    </Switch>
  </BrowserRouter>
);

export default Router;
