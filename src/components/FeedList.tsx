import {FlatList} from 'react-native';
import React from 'react';
import {useGetInfinitePosts} from '../hooks/querys/usegetInfinitePosts';
import FeedItem from './FeedItem';

const FeedList = () => {
  const {data: posts} = useGetInfinitePosts();
  return (
    <FlatList
      data={posts?.pages.flat()}
      renderItem={({item}) => <FeedItem post={item} />}
      keyExtractor={item => String(item.id)}
      numColumns={2}
    />
  );
};

export default FeedList;
