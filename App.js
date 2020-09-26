import React from 'react';
import { AppRegistry } from 'react-native';

import Routes from './Router'

const App = () => {

  return (
    <Routes />
  );
}

export default App
AppRegistry.registerComponent('App', ()=> App)
