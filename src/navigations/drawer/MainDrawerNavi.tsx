import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHome from '../../screens/map/MapHome';
import FeedHome from '../../screens/feed/FeedHome';
import CalendarHome from '../../screens/calendar/CalendarHome';

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
