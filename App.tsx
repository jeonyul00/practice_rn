/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavi from './src/navigations/root/RootNavi';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavi />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
