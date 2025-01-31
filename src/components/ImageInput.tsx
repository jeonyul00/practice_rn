import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface ImageInputProps {
  onChange: () => void;
}

const ImageInput = ({onChange}: ImageInputProps) => {
  return (
    <Pressable onPress={onChange}>
      <Text>사진추가</Text>
    </Pressable>
  );
};

export default ImageInput;

const styles = StyleSheet.create({});
