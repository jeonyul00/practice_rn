import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {LatLng} from 'react-native-maps';

export function useUserLocation() {
  const [userLocation, setUserLocation] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState(false);

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
  }, []);

  return {userLocation, error};
}
