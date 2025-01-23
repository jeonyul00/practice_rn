import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {mapNavigations} from '../../const/navigations';
import MapHome from '../../screens/map/MapHome';

export type MapStackParamList = {
  [mapNavigations.MAP_HOME]: undefined;
};
const Stack = createStackNavigator<MapStackParamList>();

const MapStackNavi = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff',
        },
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#aaaaaa',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: '#000000',
      }}>
      <Stack.Screen
        name={mapNavigations.MAP_HOME}
        component={MapHome}
        options={{headerTitle: ' ', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MapStackNavi;
