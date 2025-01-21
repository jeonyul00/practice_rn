import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {authNavigations} from '../../const/navigations';

import AuthHome from '../../screens/auth/AuthHome';
import Login from '../../screens/auth/Login';
import Signup from '../../screens/auth/Signup';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
};
const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavi = () => {
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
        name={authNavigations.AUTH_HOME}
        component={AuthHome}
        options={{headerTitle: ' ', headerShown: false}}
      />
      <Stack.Screen
        name={authNavigations.LOGIN}
        component={Login}
        options={{headerTitle: '로그인'}}
      />
      <Stack.Screen
        name={authNavigations.SIGNUP}
        component={Signup}
        options={{headerTitle: '회원가입'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavi;
