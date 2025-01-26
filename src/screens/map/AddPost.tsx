import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {MapStackParamList} from '../../navigations/stack/MapStackNavi';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import {validateAddPost} from '../../utils/validate';

type props = StackScreenProps<MapStackParamList, 'AddPost'>;

const AddPost = ({route}: props) => {
  const {location} = route.params;
  const addPost = useForm({
    initialValue: {title: '', desc: ''},
    validate: validateAddPost,
  });
  const descRef = useRef<TextInput | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <InputField value="" disable />
          <CustomButton variant="outlined" size="large" label="날짜 선택" />
          <InputField
            placeholder="제목을 입력하세요."
            {...addPost.getTextInputProps('title')}
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => descRef.current?.focus()}
            error={addPost.error?.title}
          />
          <InputField
            placeholder="내용을 입력하세요 (선택)"
            inputMode="email"
            {...addPost.getTextInputProps('desc')}
            blurOnSubmit={false}
            returnKeyType="next"
            multiline
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {flex: 1},
  contentContainer: {flex: 1, padding: 20, marginBottom: 10},
  inputContainer: {gap: 20, marginBottom: 20},
});
