import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import InputField from '../../components/InputField';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    pwd: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    pwd: false,
  });

  const handleChangeValues = (name: string, text: string) => {
    setValues({
      ...values,
      [name]: text,
    });
  };

  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          inputMode="email"
          value={values.email}
          onChangeText={text => handleChangeValues('email', text)}
          onBlur={() => handleBlur('email')}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          value={values.pwd}
          onChangeText={text => handleChangeValues('pwd', text)}
          onBlur={() => handleBlur('pwd')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  inputContainer: {
    gap: 10,
  },
});
