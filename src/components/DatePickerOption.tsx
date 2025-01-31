import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../const';
import DatePicker from 'react-native-date-picker';

interface DatePickerProps {
  isVisible: boolean;
  date: Date;
  onDateChange: (date: Date) => void;
  onConfirmDate: () => void;
}

const DatePickerOption = ({
  isVisible,
  date,
  onDateChange,
  onConfirmDate,
}: DatePickerProps) => {
  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <SafeAreaView style={styles.optionBackground}>
        <View style={styles.optionContainer}>
          <DatePicker
            mode="date"
            date={date}
            onDateChange={onDateChange}
            locale="ko"
          />
        </View>
        <View style={styles.optionContainer}>
          <Pressable style={styles.optionButton} onPress={onConfirmDate}>
            <Text>확인</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default DatePickerOption;

const styles = StyleSheet.create({
  optionBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  optionContainer: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: colors.GRAY_200,
    overflow: 'hidden',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    gap: 5,
  },
});
