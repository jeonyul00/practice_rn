/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStackNavi from './src/navigation/AuthStackNavi';

function App() {
  return (
    <NavigationContainer>
      <AuthStackNavi />
    </NavigationContainer>
  );
}

export default App;
