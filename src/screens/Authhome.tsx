import {Button, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../navigations/stack/AuthStackNavi';
import {authNavigations} from '../const';

type props = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

const AuthHome = ({navigation}: props) => {
  return (
    <SafeAreaView>
      <Button
        title="로그인 화면으로 이동"
        onPress={() => {
          navigation.navigate(authNavigations.LOGIN);
        }}
      />
      <Button
        title="회원가입 화면으로 이동"
        onPress={() => {
          navigation.navigate(authNavigations.SIGNUP);
        }}
      />
    </SafeAreaView>
  );
};

export default AuthHome;

const styles = StyleSheet.create({});
