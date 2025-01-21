import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../navigation/AuthStackNavi';
import {authNavigations} from '../const';

type props = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

const AuthHome = ({navigation}: props) => {
  return (
    <View>
      <Button
        title="로그인 화면으로 이동"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default AuthHome;

const styles = StyleSheet.create({});
