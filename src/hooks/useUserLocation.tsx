import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {LatLng} from 'react-native-maps';
import {useAppState} from './useAppState';

export function useUserLocation() {
  const [userLocation, setUserLocation] = useState<LatLng>({
    latitude: 37.5516032365118,
    longitude: 126.98989626020192,
  });
  const [error, setError] = useState(false);
  const {isComback} = useAppState();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        setUserLocation({latitude, longitude});
        setError(false);
      },
      () => {
        setError(true);
      },
      {enableHighAccuracy: true},
    );
  }, [isComback]);

  return {userLocation, error};
}
