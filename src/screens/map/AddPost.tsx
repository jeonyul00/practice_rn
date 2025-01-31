import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {MapStackParamList} from '../../navigations/stack/MapStackNavi';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import {validateAddPost} from '../../utils/validate';
import AddPostHeaderRight from '../../components/AddPostHeaderRight';
import useMutateCreatePost from '../../hooks/querys/useMutateCreatePost';
import {MarkerColor} from '../../types/domain';
import DatePickerOption from '../../components/DatePickerOption';
import ImageInput from '../../components/ImageInput';
import {usePermission} from '../../hooks/usePermission';
import useImagePicker from '../../hooks/useImagePicker';

type props = StackScreenProps<MapStackParamList, 'AddPost'>;

const AddPost = ({route, navigation}: props) => {
  const {location} = route.params;
  const addPost = useForm({
    initialValue: {title: '', desc: ''},
    validate: validateAddPost,
  });
  const createPost = useMutateCreatePost();
  const [makerColor, setMakerColor] = useState<MarkerColor>('RED');
  const [score, setScore] = useState(5);
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [isPick, setIsPick] = useState(false);
  const imgPicker = useImagePicker({init: []});

  usePermission('PHOTO');

  const descRef = useRef<TextInput | null>(null);

  const handleChange = (pickedDate: Date) => {
    setDate(pickedDate);
  };

  const show = () => {
    setIsVisible(true);
  };
  const hide = () => {
    setIsVisible(false);
  };
  const handleConfirmDate = () => {
    setIsPick(false);
    hide();
  };

  const handleSubmit = () => {
    const body = {
      date: new Date(),
      title: addPost.values.title,
      description: addPost.values.desc,
      color: makerColor,
      score,
      imageURIs: [],
    };
    createPost.mutate(
      {
        address,
        ...location,
        ...body,
      },
      {
        onSuccess: () => navigation.goBack(),
      },
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => AddPostHeaderRight(handleSubmit),
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <InputField value="" disable />
          <CustomButton
            variant="outlined"
            size="large"
            label="날짜 선택"
            onPress={show}
          />
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
          <ImageInput onChange={imgPicker.handleChange} />
          <DatePickerOption
            date={date}
            isVisible={isVisible}
            onDateChange={handleChange}
            onConfirmDate={handleConfirmDate}
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
