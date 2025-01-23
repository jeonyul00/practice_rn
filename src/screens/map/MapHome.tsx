import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useAuth from '../../hooks/querys/useAuth';

const MapHome = () => {
  const {} = useAuth();
  return (
    <View>
      <Text>MapHome</Text>
    </View>
  );
};

export default MapHome;

const styles = StyleSheet.create({});
