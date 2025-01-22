import api from './axios';
import {Category, Profile} from '../types/domain';
import EncryptedStorage from 'react-native-encrypted-storage';

type RequestUser = {
  email: string;
  password: string;
};

const postSignup = async ({email, password}: RequestUser): Promise<void> => {
  const {data} = await api.post('/auth/signup', {
    email,
    password,
  });
  return data;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

const postLogin = async ({
  email,
  password,
}: RequestUser): Promise<ResponseToken> => {
  const {data} = await api.post('/auth/signin', {
    email,
    password,
  });
  return data;
};

type ResponseProfile = Profile & Category;

const getProfile = async (): Promise<ResponseProfile> => {
  const {data} = await api.get('/auth/me');
  return data;
};

const getAccessToken = async (): Promise<ResponseToken> => {
  const refeshToken = await EncryptedStorage.getItem('refeshToken');
  const {data} = await api.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refeshToken}`,
    },
  });
  return data;
};

const logout = async () => {
  await api.post('auth/logout');
};

export {postSignup, postLogin, getProfile, getAccessToken, logout};
export type {RequestUser, ResponseToken, ResponseProfile};
