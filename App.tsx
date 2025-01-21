/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavi from './src/navigations/root/RootNavi';

function App() {
  return (
    <NavigationContainer>
      <RootNavi />
    </NavigationContainer>
  );
}

export default App;
