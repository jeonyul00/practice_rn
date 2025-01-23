import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import React, {useRef} from 'react';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import {validateLogin} from '../../utils/validate';
import useAuth from '../../hooks/querys/useAuth';

const Login = () => {
  const login = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });
  const {loginMutation} = useAuth();
  const pwdRef = useRef<TextInput | null>(null);

  const handleSubmit = () => {
    loginMutation.mutate(login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          inputMode="email"
          {...login.getTextInputProps('email')}
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => pwdRef.current?.focus()}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          {...login.getTextInputProps('password')}
          blurOnSubmit={false}
          returnKeyType="join"
          onSubmitEditing={handleSubmit}
          ref={pwdRef}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1, margin: 20},
  inputContainer: {gap: 10, marginBottom: 30},
});
