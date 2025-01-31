import api from './axios';

export const uploadImages = async (body: FormData): Promise<string[]> => {
  const {data} = await api.post('/images', body, {
    headers: {
      'Content-Type': 'mutipart/form-data',
    },
  });
  return data;
};
