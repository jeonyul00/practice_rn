import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInputProps,
  View,
  TextInput,
} from 'react-native';
import React, {ForwardedRef, forwardRef, useRef} from 'react';
import {colors} from '../const';
import {mergeRefs} from '../utils/common';

interface InputFieldProps extends TextInputProps {
  disable?: boolean;
  error?: string;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = forwardRef(
  (
    {disable = false, error, ...props}: InputFieldProps,
    ref?: ForwardedRef<TextInput>,
  ) => {
    const innerRef = useRef<TextInput | null>(null);

    const onPress = () => {
      innerRef.current?.focus();
    };
    return (
      <Pressable onPress={onPress}>
        <View
          style={[
            styles.container,
            disable && styles.disable,
            error && styles.error,
          ]}>
          <TextInput
            ref={ref ? mergeRefs(innerRef, ref) : ref}
            style={[styles.input, disable && styles.disable]}
            {...props}
            placeholderTextColor={colors.GRAY_500}
            editable={!disable}
            autoCapitalize="none"
            spellCheck={false}
            autoCorrect={false}
          />
          {!!error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </Pressable>
    );
  },
);

export default InputField;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: deviceHeight > 700 ? 10 : 8,
  },
  input: {fontSize: 12, color: colors.BLACK, padding: 0},
  disable: {
    backgroundColor: colors.GRAY_200,
    color: colors.PINK_700,
  },
  error: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  errorText: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 5,
  },
});
