import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedHome from '../../screens/feed/FeedHome';
import CalendarHome from '../../screens/calendar/CalendarHome';
import MapStackNavi from '../stack/MapStackNavi';
import {mainNavigations} from '../../const';

export type MainDrawerParamList = {
  [mainNavigations.HOME]: undefined;
  [mainNavigations.FEED]: undefined;
  [mainNavigations.CALENDAR]: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const MainDrawerNavi = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
      }}>
      <Drawer.Screen
        name={mainNavigations.HOME}
        component={MapStackNavi}
        options={{
          title: '홈',
        }}
      />
      <Drawer.Screen
        name={mainNavigations.FEED}
        component={FeedHome}
        options={{
          title: '피드',
        }}
      />
      <Drawer.Screen
        name={mainNavigations.CALENDAR}
        component={CalendarHome}
        options={{
          title: '캘린더',
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavi;
