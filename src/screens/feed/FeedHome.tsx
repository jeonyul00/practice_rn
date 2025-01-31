import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FeedList from '../../components/FeedList';

const FeedHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FeedList />
    </SafeAreaView>
  );
};

export default FeedHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
