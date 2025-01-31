import {ImageUri, Post} from '../types/domain';
import api from './axios';

type RequestCreatePost = Omit<Post, 'id'> & {imageURIs: ImageUri[]};
type ResponsePost = Post & {imageURIs: ImageUri[]};

export const createPost = async (
  body: RequestCreatePost,
): Promise<ResponsePost> => {
  const {data} = await api.post('/posts', body);
  return data;
};

export type {RequestCreatePost, ResponsePost};
