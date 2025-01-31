import api from './axios';
import {Marker} from '../types/domain';

export const getMarkers = async (): Promise<Marker[]> => {
  const {data} = await api.get('/markers/my');
  return data;
};
