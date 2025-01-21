import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavi';
import {authNavigations} from '../../const/navigations';
import CustomButton from '../../components/CustomButton';

type props = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

const AuthHome = ({navigation}: props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/MATZIP.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인 화면으로 이동"
          onPress={() => {
            navigation.navigate(authNavigations.LOGIN);
          }}
          size="large"
        />
        <CustomButton
          label="회원가입 화면으로 이동"
          onPress={() => {
            navigation.navigate(authNavigations.SIGNUP);
          }}
          size="large"
          variant="outlined"
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthHome;

const styles = StyleSheet.create({
  container: {flex: 1, margin: 30, alignItems: 'center'},
  img: {width: '100%', height: '100%'},
  imgContainer: {flex: 1.5, width: Dimensions.get('screen').width / 2},
  buttonContainer: {flex: 0.5, gap: 10},
});
