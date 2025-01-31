import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ResponsePost} from '../api/post';

interface FeedItemProps {
  post: ResponsePost;
}

const FeedItem = (props: FeedItemProps) => {
  const post = props.post;
  return (
    <View style={styles.container}>
      <View>
        {post.imageURIs.length > 0 && (
          <View>
            <Image
              source={{
                uri: `${
                  Platform.OS === 'ios'
                    ? 'http://localhost:3030/'
                    : 'http://10.0.2.2:3030//'
                }${post.imageURIs[0].uri}`,
              }}
              resizeMode="cover"
            />
          </View>
        )}
        {post.imageURIs.length === 0 && (
          <View>
            <Text>No Image</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginVertical: 12,
  },
});
