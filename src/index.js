import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Global.css';

import Login from './components/Login';
import TwoFactorAuthentication from './components/TwoFactorAuthentication';
import RegistrationOfEstablishments from './components/RegistrationOfEstablishments';
import InformationRecord from './components/InformationRecord';
import Crashed from './components/Crashed';
import Loading from './components/Loading';



ReactDOM.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);


