import {
  Pressable,
  StyleSheet,
  Text,
  Dimensions,
  PressableProps,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../const';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'medium';
  inVaild?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const CustomButton = ({
  label,
  variant = 'filled',
  size = 'medium',
  inVaild = false,
  ...props
}: CustomButtonProps) => {
  return (
    <Pressable
      disabled={inVaild}
      style={({pressed}) => [
        styles.container,
        styles[variant],
        styles[size],
        pressed ? styles[`${variant}Pressed`] : styles[`${variant}`],
        inVaild && styles.inVaild,
      ]}
      {...props}>
      <View style={styles[size]}>
        <Text style={[styles[`${variant}Text`], styles.text]}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {borderRadius: 3, justifyContent: 'center', flexDirection: 'row'},
  filled: {backgroundColor: colors.PINK_700},
  filledPressed: {backgroundColor: colors.PINK_500},
  outlinedPressed: {
    backgroundColor: colors.PINK_700,
    borderWidth: 1,
    opacity: 0.5,
  },
  outlined: {backgroundColor: colors.PINK_700, borderWidth: 1},
  large: {
    width: '100%',
    paddingVertical: deviceHeight > 700 ? 12 : 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 10 : 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  filledText: {color: colors.WHITE},
  outlinedText: {color: colors.PINK_700},
  text: {fontSize: 16, fontWeight: '700'},
  inVaild: {opacity: 0.5},
});
