import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import {validateSigup} from '../../utils/validate';
import CustomButton from '../../components/CustomButton';
import {TextInput} from 'react-native-gesture-handler';

const Signup = () => {
  const signup = useForm({
    initialValue: {email: '', pwd: '', pwdConfirm: ''},
    validate: validateSigup,
  });
  const pwdRef = useRef<TextInput | null>(null);
  const pwdConfirmRef = useRef<TextInput | null>(null);

  const handleSubmit = () => {
    console.log(signup.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          inputMode="email"
          {...signup.getTextInputProps('email')}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => pwdRef.current?.focus()}
          ref={pwdRef}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          {...signup.getTextInputProps('pwd')}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => pwdConfirmRef.current?.focus()}
          ref={pwdConfirmRef}
          textContentType="oneTimeCode"
        />
        <InputField
          placeholder="비밀번호 확인"
          secureTextEntry
          textContentType="oneTimeCode"
          {...signup.getTextInputProps('pwdConfirm')}
          onSubmitEditing={handleSubmit}
        />
      </View>
      <CustomButton label="회원가입" size="large" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});
