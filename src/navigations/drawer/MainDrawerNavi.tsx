import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHome from '../../screens/MapHome';
import FeedHome from '../../screens/FeedHome';
import CalendarHome from '../../screens/CalendarHome';

const Drawer = createDrawerNavigator();

const MainDrawerNavi = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHome} />
      <Drawer.Screen name="FeedHome" component={FeedHome} />
      <Drawer.Screen name="CalendarHome" component={CalendarHome} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavi;
