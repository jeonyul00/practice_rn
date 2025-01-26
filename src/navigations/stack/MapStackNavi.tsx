import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {mapNavigations} from '../../const/navigations';
import MapHome from '../../screens/map/MapHome';
import AddPost from '../../screens/map/AddPost';
import {LatLng} from 'react-native-maps';

export type MapStackParamList = {
  [mapNavigations.MAP_HOME]: undefined;
  [mapNavigations.ADD_POST]: {location: LatLng};
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
      <Stack.Screen
        name={mapNavigations.ADD_POST}
        component={AddPost}
        options={{headerTitle: '장소 추가'}}
      />
    </Stack.Navigator>
  );
};

export default MapStackNavi;
