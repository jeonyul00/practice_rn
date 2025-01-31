import {Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {colors} from '../const';

interface HeaderProps extends PressableProps {
  labelText?: string;
  icon?: ReactNode;
  hasError?: boolean;
}

const HeaderButton = ({
  labelText,
  icon,
  hasError = false,
  ...props
}: HeaderProps) => {
  return (
    <Pressable style={styles.container} disabled={hasError} {...props}>
      {!labelText && icon}
      {!icon && labelText && <Text>{labelText}</Text>}
    </Pressable>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  font: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.PINK_700,
  },
});
